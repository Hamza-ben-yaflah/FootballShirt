import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "../../client/contentful";
import styles from "./Checkout.module.css";
import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from "next/router";
import commerce from "../../lib/commerce";

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product: any) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },

    revalidate: 60,
  };
}

const Checkout = ({ details }: { details: any }) => {
  const shipping = 11;
  const sum = shipping + details.items[0].fields.price;
  console.log(details);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const addPaypall = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZd8WuAQ2bTZMlf0-4WjRL-kyJg5LIZceVDGC1cwOXQFVShXO-CZOomOI5len43VfbWhv_Wy4uJ3iygm";

    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPaypall();
  }, []);

  const router = useRouter();
  const {
    query: { email, firstname, lastname, country, streetAdress, city, phone },
  } = router;

  const props = {
    email,
    firstname,
    lastname,
    country,
    streetAdress,
    city,
    phone,
  };

  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>PAYMENT</Title>
      </Divider>
      <Row justify="space-around">
        <Col span={12}>
          {scriptLoaded ? (
            <PayPalButton
              amount={sum}
              onSuccess={(details: any) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              }}
            />
          ) : (
            <span>loading...</span>
          )}
        </Col>
        <Col span={6}>
          <Title level={4}>Order Summary</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.wrapper1}>
            <Text>Cart Subtotal</Text>
            <Text>{`${details.items[0].fields.price} £`}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Shipping</Text>
            <Text>11.00 £</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Order Total Excl. Tax</Text>
            <Text>{`${sum} £`}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Order Total Incl. Tax</Text>
            <Text>{`${sum} £`}</Text>
          </div>
          <br />
          <Title level={4}>Item</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.wrapper2}>
            <div>
              <Image
                width={150}
                height={150}
                alt="shirt img"
                src={
                  "https:" + details.items[0].fields.shirtImage.fields.file.url
                }
              />
            </div>
            <div className={styles.itemWrapper}>
              <span>{details.items[0].fields.description}</span>
              <span>{details.items[0].fields.size}</span>
              <span>{details.items[0].fields.player}</span>
            </div>
            <div>
              <Text>{`${details.items[0].fields.price} £`}</Text>
            </div>
          </div>
          <br />
          <Title level={4}>Ship To</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.shippWrapper}>
            <Text>{props.email}</Text>
            <Text>{props.firstname}</Text>
            <Text>{props.lastname}</Text>
            <Text>{props.country}</Text>
            <Text>{props.city}</Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;

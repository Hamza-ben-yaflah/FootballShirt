/* eslint-disable @next/next/no-img-element */
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
import emailjs from "emailjs-com";

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
  };
}

const findCountry = (country: string) => {
  const europeanCountries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "The Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ];

  let shipp = 0;
  const includeCountry = europeanCountries.includes(country);
  includeCountry ? (shipp = 11) : (shipp = 14.5);
  return shipp;
};

const Checkout = ({ product }: { product: any }) => {
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

  const sum = country && findCountry(country as string) + product.price.raw;
  console.log(product);
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

  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>PAYMENT</Title>
      </Divider>
      <Row justify="space-around" wrap>
        <Col lg={12}>
          {scriptLoaded ? (
            <PayPalButton
              amount={sum}
              onSuccess={(details: any) => {
                emailjs
                  .send(
                    "service_4fxlf8p",
                    "template_kspebic",
                    {
                      firstname: firstname,
                      lastname: lastname,
                      email: email,
                      phone: phone,
                      country: country,
                      streetAdress: streetAdress,
                      city: city,
                      shirtName: product.name,
                      price: product.price.formatted_with_symbol,
                    },
                    "iDjDlkC3NKipnLh_h"
                  )
                  .then((result) => {
                    console.log(result);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              }}
            />
          ) : (
            <span>loading...</span>
          )}
        </Col>
        <Col lg={6}>
          <Title level={4}>Order Summary</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.wrapper1}>
            <Text>Cart Subtotal</Text>
            <Text>{product.price.formatted_with_symbol}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Shipping</Text>
            <Text>{`${findCountry(country as string)} £`}</Text>
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
              <img
                width={150}
                height={150}
                alt="shirt img"
                src={product.image.url}
              />
            </div>
            <div className={styles.itemWrapper}>
              <span>{product.name}</span>
              <span>{product.variant_groups[0].options[0].name}</span>

              <Text>{product.price.formatted_with_symbol}</Text>
            </div>
          </div>
          <br />
          <Title level={4}>Ship To</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.shippWrapper}>
            <Text>{`Email :  ${props.email}`}</Text>
            <Text>{`First Name :  ${props.firstname}`}</Text>
            <Text>{`Last Name :  ${props.lastname}`}</Text>
            <Text>{`Country : ${props.country}`}</Text>
            <Text>{`City : ${props.city}`}</Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;

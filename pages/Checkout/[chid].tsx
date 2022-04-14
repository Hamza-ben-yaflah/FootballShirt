import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Image from "next/image";
import React from "react";
import { client } from "../../client/contentful";
import Card from "../../Components/Card/Card";
import styles from "./Checkout.module.css";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const res = await client.getEntries({
    content_type: "cardShirt",
    "sys.id": params.chid,
  });
  return {
    props: { details: res },
  };
}

const Checkout = ({ details }: { details: any }) => {
  const shipping = 11;
  const sum = shipping + details.items[0].fields.price;
  console.log(details);

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
        <Col span={12}>{props.email}</Col>
        <Col span={6}>
          <Title level={4}>Order Summary</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.wrapper1}>
            <Text>Cart Subtotal</Text>
            <Text>{`${details.items[0].fields.price}£`}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Shipping</Text>
            <Text>11.00£</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Order Total Excl. Tax</Text>
            <Text>{sum}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Order Total Excl. Tax</Text>
            <Text>{sum}</Text>
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
              <Text>{`${details.items[0].fields.price}£`}</Text>
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

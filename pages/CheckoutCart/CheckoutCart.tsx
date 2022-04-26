import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import { useCartSatet } from "../../context/cart";
import { PayPalButton } from "react-paypal-button-v2";
import styles from "./CheckoutCart.module.css";
import { useRouter } from "next/router";
import CartItem from "../../Components/CartItem/CartItem";

const CheckoutCart = () => {
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

  const products = useCartSatet();
  const sum = products.subtotal.raw + 11;
  return (
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
          <Text strong>{`${products.subtotal.raw} £`}</Text>
        </div>
        <div className={styles.wrapper1}>
          <Text>Shipping</Text>
          <Text strong>11.00 £</Text>
        </div>
        <div className={styles.wrapper1}>
          <Text>Order Total Excl. Tax</Text>
          <Text strong>{`${sum} £`}</Text>
        </div>
        <div className={styles.wrapper1}>
          <Text>Order Total Incl. Tax</Text>
          <Text strong>{`${sum} £`}</Text>
        </div>
        <br />
        <Title level={4}>Items</Title>
        <Divider orientation="left" plain className="divider"></Divider>
        <div className={styles.wrapper2}>
          {products.line_items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
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
  );
};

export default CheckoutCart;

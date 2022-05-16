import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import BuyForm from "../../Components/BuyForm/BuyForm";
import Card from "../../Components/Card/Card";
import CartItem from "../../Components/CartItem/CartItem";
import { useCartSatet } from "../../context/cart";
import styles from "./Cart.module.css";

const Cart = () => {
  const obj = useCartSatet();
  console.log(obj);

  return (
    <div>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>SHIPPING ADDRESS</Title>
      </Divider>
      <Row justify="space-around" wrap>
        <Col lg={12}>
          <div className={styles.container}>
            <BuyForm details="" />
          </div>
        </Col>
        <Col lg={12}>
          <Row justify="space-around" wrap>
            {obj.line_items.map((item: any) => (
              <Col key={item.id}>
                <Card
                  card={{
                    id: "",
                    image: item.image.url,
                    price: item.price.formatted_with_symbol,
                    description: item.name,
                  }}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;

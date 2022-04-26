import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import BuyForm from "../../Components/BuyForm/BuyForm";
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
      <Row justify="space-around">
        <Col lg={12} sm={12}>
          <div className={styles.container}>
            <BuyForm details="" />
          </div>
        </Col>

        <Col lg={12} sm={12}>
          {obj.line_items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Cart;

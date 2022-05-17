import { Button, Divider, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./CartModal.module.css";
const CartModal = ({ visible, handlerCancel, products }: any) => {
  const sum = products.subtotal.raw + 11;

  return (
    <>
      <Modal
        visible={visible}
        onCancel={handlerCancel}
        title="Cart"
        footer={[
          <Button key="back" onClick={handlerCancel}>
            Return
          </Button>,

          <Button key="link" href="/Cart/Cart" type="primary">
            Go to checkout
          </Button>,
        ]}
      >
        <Title level={4}>Order Summary</Title>
        <Divider orientation="left" plain className="divider"></Divider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          {products.line_items.map((item: any) => (
            <CartItem key={item.id} item={item} visible={visible} />
          ))}
        </div>

        <Divider orientation="left" plain className="divider"></Divider>

        <div className={styles.wrapper1}>
          <Text>Cart Subtotal</Text>
          <Text strong>{`${products.subtotal.raw} £`}</Text>
        </div>
      </Modal>
    </>
  );
};

export default CartModal;

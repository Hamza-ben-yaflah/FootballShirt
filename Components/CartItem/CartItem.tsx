/* eslint-disable @next/next/no-img-element */
import { Button, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import Image from "next/image";

import { useCartDispatch } from "../../context/cart";
import commerce from "../../lib/commerce";

const CartItem = ({ item, visible }: any) => {
  const { setCart } = useCartDispatch();

  const removeItem = () =>
    commerce.cart.remove(item.id).then(handleUpadateCart);

  const handleUpadateCart = ({ cart }: any) => setCart(cart);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "20px",
      }}
    >
      <img width={150} height={150} alt="shirt img" src={item.image.url} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Text>{item.name}</Text>
        <Text>{item.price.formatted_with_symbol}</Text>
        {visible ? <Button onClick={removeItem}>Remove item</Button> : null}
      </div>
    </div>
  );
};

export default CartItem;

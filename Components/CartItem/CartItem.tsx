/* eslint-disable @next/next/no-img-element */
import { Button, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import Image from "next/Image";

import { useCartDispatch } from "../../context/cart";
import commerce from "../../lib/commerce";

const CartItem = ({ item, visible }: any) => {
  console.log(item, "mock");

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
        fontSize: "20px",
      }}
      data-testid="CardItem"
    >
      <Image
        width={200}
        height={200}
        alt="shirt img"
        src={item.image.url}
        priority
      />
      {visible ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text strong>{item.name}</Text>
          <Text>{item.price.formatted_with_symbol}</Text>

          <Button type="primary" onClick={removeItem}>
            Remove item
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text strong>{item.name}</Text>
          <Text>{item.price.formatted_with_symbol}</Text>
        </div>
      )}
    </div>
  );
};

export default CartItem;

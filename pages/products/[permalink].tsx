/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../client/contentful";
import styles from "./pid.module.css";
import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";

import { useEffect, useState } from "react";
const { Text, Title } = Typography;

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

const ShirtDetails = ({ product }: { product: any }) => {
  console.log(product);
  const { setCart } = useCartDispatch();
  const [disable, setDisable] = useState(false);

  const addToCart = () => {
    commerce.cart.add(product.id).then(({ cart }: any) => {
      setCart(cart);
      setDisable(true);
    });
  };

  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col push={0} lg={12}>
          <img
            width={600}
            height={600}
            alt="shirt img"
            src={product.image.url}
          />
        </Col>
        <Col lg={12}>
          <span
            dangerouslySetInnerHTML={{ __html: product.description }}
            className={styles.span}
          />

          <Title level={4}>Size :</Title>
          <span className={styles.span1}>
            {product.price.formatted_with_symbol}
          </span>
          <Title level={4}>Price :</Title>
          <span className={styles.span1}>{`£ ${product.name}`}</span>
          <Title level={4}>Player :</Title>
          <span className={styles.span1}>{product.name}</span>
          <div className={styles.btn}>
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={addToCart}
              disabled={disable}
            >
              ADD TO CART
            </Button>
            <Link href={`/BuyProcess/${product.permalink}`} passHref>
              <Button type="primary" size="large" shape="round">
                <a>BUY NOW</a>
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShirtDetails;

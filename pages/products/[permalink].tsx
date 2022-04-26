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
      <Row wrap>
        <Col lg={18}>
          <div className={styles.imageContainer}>
            <img
              width={400}
              height={400}
              alt="shirt img"
              src={product.assets[0].url}
            />
            <img
              width={400}
              height={400}
              alt="shirt img"
              src={product.assets[1].url}
            />
          </div>
        </Col>
        <Col lg={6}>
          <span style={{ fontSize: "30px" }}>{product.name}</span>
          <br />
          <br />
          <div className={styles.size}>
            <Title level={4}>Size :</Title>
            <span className={styles.span1}>
              {product.variant_groups[0].options[0].name}
            </span>
          </div>
          <br />
          <div className={styles.price}>
            <Title level={4}>Price :</Title>
            <span className={styles.span1}>
              {product.price.formatted_with_symbol}
            </span>
          </div>

          <div className={styles.btn}>
            <Button
              type="primary"
              size="large"
              onClick={addToCart}
              disabled={disable}
            >
              ADD TO CART
            </Button>
            <Link href={`/BuyProcess/${product.permalink}`} passHref>
              <Button type="primary" size="large" style={{ marginTop: 20 }}>
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

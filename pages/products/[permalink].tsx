/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import Typography from "antd/lib/typography";
import Link from "next/link";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useCartDispatch, useCartSatet } from "../../context/cart";
import commerce from "../../lib/commerce";
import styles from "./pid.module.css";
import Image from "next/Image";

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
  console.log(product, "hello");

  const { setCart } = useCartDispatch();
  const state = useCartSatet();
  const [disable, setDisable] = useState(false);
  console.log(state, "state");

  const addToCart = () => {
    console.log(state, "function");
    if (state.line_items?.find((elem: any) => elem.product_id === product.id)) {
      alert("this shirt is already in the cart");
    } else
      commerce.cart.add(product.id).then(({ cart }: any) => {
        setCart(cart);
        setDisable(true);
      });
  };

  const images = [
    { url: product.assets[0].url, caption: "Slide 1" },
    { url: product.assets[1].url, caption: "Slide 2" },
  ];
  const zoomOutProperties = {
    indicators: (i: any) => (
      <div>
        <Image
          src={product.assets[i].url}
          alt="indicatorImage "
          width={80}
          height={70}
          priority
        />
      </div>
    ),
    scale: 0.4,
  };

  return (
    <div className={styles.container}>
      <Row wrap gutter={18}>
        <Col lg={14}>
          <Slide {...zoomOutProperties}>
            {images.map((slideImage, index) => (
              <div className={styles.slider} key={index}>
                <Image
                  src={slideImage.url}
                  width={500}
                  height={500}
                  alt="silderImage"
                  priority
                />
              </div>
            ))}
          </Slide>
        </Col>
        <Col lg={10}>
          <div className={styles.col2Container}>
            <span style={{ fontSize: "40px" }}>{product.name}</span>
            <br />
            <br />
            <p style={{ fontSize: "20px", fontFamily: "roboto" }}>
              <strong> Size </strong>-{" "}
              {product.variant_groups[0].options[0].name}
            </p>
            <br />
            <p style={{ fontSize: "20px", fontFamily: "roboto" }}>
              <strong> Price </strong> - {product.price.formatted_with_symbol}
            </p>
            <br />
            <strong style={{ fontSize: "20px", fontFamily: "roboto" }}>
              {" "}
              Description -{" "}
            </strong>

            <section
              dangerouslySetInnerHTML={{ __html: product.description }}
              style={{
                fontSize: "20px",
                fontFamily: "roboto",
                textAlign: "start",
              }}
            ></section>

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
                <Button
                  type="primary"
                  size="large"
                  style={{ marginTop: 20 }}
                  data-cy="buy-button"
                >
                  BUY NOW
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShirtDetails;

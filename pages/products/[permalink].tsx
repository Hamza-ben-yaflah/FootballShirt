/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../client/contentful";
import styles from "./pid.module.css";
import commerce from "../../lib/commerce";
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

    revalidate: 60,
  };
}

const ShirtDetails = ({ product }: { product: any }) => {
  console.log(product);

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
            <Button type="primary" size="large" shape="round">
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

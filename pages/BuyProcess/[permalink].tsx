import { Button, Checkbox, Col, Divider, Row, Space } from "antd";
import Title from "antd/lib/typography/Title";
import { client } from "../../client/contentful";
import BuyForm from "../../Components/BuyForm/BuyForm";
import Card from "../../Components/Card/Card";
import styles from "./buyPrecess.module.css";
import commerce from "../../lib/commerce";

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

const buyProcess = ({ product }: { product: any }) => {
  console.log(product);

  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>SHIPPING ADDRESS</Title>
      </Divider>
      <Row justify="space-around" wrap>
        <Col span={12}>
          <div className={styles.container}>
            <BuyForm details={product} />
          </div>
        </Col>
        <Col span={12}>
          <Card
            card={{
              id: "",
              image: product.image.url,
              price: product.price.formatted_with_symbol,
              description: product.name,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default buyProcess;

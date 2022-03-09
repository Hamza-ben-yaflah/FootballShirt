import { Button, Col, Row } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
import styles from "./pid.module.css";
const { Text, Title } = Typography;

export const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getServerSideProps(context: any) {
  const { params } = context;
  const res = await client.getEntries({
    content_type: "cardShirt",
    "sys.id": params.pid,
  });
  return {
    props: { details: res },
  };
}

const ShirtDetails = ({ details }: { details: any }) => {
  console.log(details);

  console.log(details.items[0].fields.description);

  return (
    <div className={styles.container}>
      <Row>
        <Col span={12} push={0}>
          <Image
            width={600}
            height={600}
            alt="shirt img"
            src={"https:" + details.items[0].fields.shirtImage.fields.file.url}
          />
        </Col>
        <Col span={12} push={1}>
          <Title level={3} type="danger">
            {details.items[0].fields.description}
          </Title>
          <br />
          <br />
          <Title type="danger" level={5}>
            Size :
          </Title>
          <Text>{details.items[0].fields.size}</Text>

          <Title level={5} type="danger">
            Price :
          </Title>
          <Text>{`£ ${details.items[0].fields.price}`}</Text>
          <Title level={5} type="danger">
            Player :
          </Title>
          <Text>{details.items[0].fields.player}</Text>
          <div className={styles.btn}>
            <Button type="primary" danger size="large">
              ADD TO CART
            </Button>
            <Button type="primary" danger size="large">
              BUY NOW
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShirtDetails;

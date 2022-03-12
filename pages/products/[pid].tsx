import { Button, Col, Row } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../client/contentful";
import styles from "./pid.module.css";
const { Text, Title } = Typography;

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
          <span className={styles.span}>
            {details.items[0].fields.description}
          </span>
          <br />
          <br />
          <Title level={4}>Size :</Title>
          <span className={styles.span1}>{details.items[0].fields.size}</span>
          <Title level={4}>Price :</Title>
          <span
            className={styles.span1}
          >{`£ ${details.items[0].fields.price}`}</span>
          <Title level={4}>Player :</Title>
          <span className={styles.span1}>{details.items[0].fields.player}</span>
          <div className={styles.btn}>
            <Button type="primary" size="large" shape="round">
              ADD TO CART
            </Button>
            <Link href={`/BuyProcess/${details.items[0].sys.id}`} passHref>
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

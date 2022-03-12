import { Button, Checkbox, Col, Divider, Row, Space } from "antd";
import Title from "antd/lib/typography/Title";
import { client } from "../../client/contentful";
import BuyForm from "../../Components/BuyForm/BuyForm";
import Card from "../../Components/Card/Card";
import styles from "./buyPrecess.module.css";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const res = await client.getEntries({
    content_type: "cardShirt",
    "sys.id": params.buyP,
  });
  return {
    props: { details: res },
  };
}

const buyProcess = ({ details }: { details: any }) => {
  console.log(details);

  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>SHIPPING ADDRESS</Title>
      </Divider>
      <Row>
        <Col span={12} pull={1}>
          <div className={styles.container}>
            <BuyForm />
          </div>
        </Col>
        <Col span={12} push={2}>
          <Card
            card={{
              id: "",
              image: details.items[0].fields.shirtImage.fields.file.url,
              price: details.items[0].fields.price,
              description: details.items[0].fields.description,
            }}
          />
        </Col>
      </Row>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>SHIPPING METHODE</Title>
      </Divider>
      <div className={styles.checkbox}>
        <Space direction="vertical">
          <Checkbox>DHL EXPRESS DELIVERY TO EUROPE 11£</Checkbox>
          <br />
          <Checkbox>DHL EXPRESS DELIVERY OUTSIDE EUROPE 16£</Checkbox>
        </Space>
      </div>
      <div className={styles.btn1}>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </>
  );
};

export default buyProcess;

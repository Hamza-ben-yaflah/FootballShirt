import { Col, Row } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
const { Text } = Typography;

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
    <div>
      <Row>
        <Col span={12}>
          <Image
            width={600}
            height={600}
            alt="shirt img"
            src={"https:" + details.items[0].fields.shirtImage.fields.file.url}
          />
        </Col>
        <Col span={12}>
          <Text strong>{details.items[0].fields.description}</Text>
          <Text strong>{details.items[0].fields.description}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default ShirtDetails;

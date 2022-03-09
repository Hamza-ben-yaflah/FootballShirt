import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import CardContainer from "../Components/CardContainer/CardContainer";

export const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "cardShirt" });

  return {
    props: {
      data: res.items,
    },
  };
}

const Home = (data: any) => {
  console.log(data);

  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={1} type="danger">
          Shirts
        </Title>
      </Divider>
      <CardContainer data={data}></CardContainer>;
    </>
  );
};

export default Home;

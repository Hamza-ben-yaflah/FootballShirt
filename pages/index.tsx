import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import { client } from "../client/contentful";
import CardContainer from "../Components/CardContainer/CardContainer";

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
      {/* <Image src={vint} width={200} height={200} /> */}
      <Divider orientation="left" plain className="divider">
        <Title level={1}>SHIRTS</Title>
      </Divider>
      <CardContainer data={data}></CardContainer>;
    </>
  );
};

export default Home;

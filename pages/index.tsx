import Layout from "../Components/Layout/Layout";

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
    <div>
      <Layout data={data}></Layout>
    </div>
  );
};

export default Home;

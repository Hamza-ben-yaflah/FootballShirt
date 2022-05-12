import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import Card from "../../Components/Card/Card";
import CardContainer from "../../Components/CardContainer/CardContainer";
import commerce from "../../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

const MatchWorn = (products: any) => {
  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={1}>MATCHWORN</Title>
      </Divider>
      <CardContainer data={products} categorie="matchworn" />
    </>
  );
};

export default MatchWorn;

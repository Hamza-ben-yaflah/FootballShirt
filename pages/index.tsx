import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import { client } from "../client/contentful";
import CardContainer from "../Components/CardContainer/CardContainer";
import Slider from "../Components/Slider/Slider";
import React, { useState } from "react";
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

const Home = (products: any) => {
  console.log(products);

  return (
    <>
      <Slider />
      <Divider orientation="left" plain className="divider">
        <Title level={1}>SHIRTS</Title>
      </Divider>
      <CardContainer data={products} />;
    </>
  );
};

export default Home;

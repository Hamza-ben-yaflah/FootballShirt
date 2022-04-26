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
    <div>
      <CardContainer data={products} categorie="matchworn" />
    </div>
  );
};

export default MatchWorn;

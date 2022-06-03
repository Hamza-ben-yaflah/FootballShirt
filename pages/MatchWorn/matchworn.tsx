import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import Card from "../../Components/Card/CardShirt";
import CardContainer from "../../Components/CardContainer/CardContainer";
import commerce from "../../lib/commerce";
import styles from "./matchworn.module.css";

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
    <div className={styles.container}>
      <CardContainer data={products} categorie="matchworn" id="matchworn" />
    </div>
  );
};

export default MatchWorn;

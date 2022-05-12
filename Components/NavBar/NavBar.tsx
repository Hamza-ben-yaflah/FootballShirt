import { ShoppingCartOutlined } from "@ant-design/icons";
import { Menu, Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import vintage from "../../public/vintage.jpg";
import styles from "./NavBar.module.css";
import commerce from "../../lib/commerce";
import { useCartSatet } from "../../context/cart";
import { useCartDispatch } from "../../context/cart";
import React, { useEffect, useRef, useState } from "react";
import CartModal from "../CartModal/CartModal";
import { connectSearchBox } from "react-instantsearch-dom";
import SearchBox from "../SearchBox/SearchBox";

import { InstantSearch, Hits, Highlight } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";

import { connectStateResults } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "MK5PVV9FL2",
  "5f7438a9862dba119cf7ab68bc725827"
);
const CustomSearchBox = connectSearchBox(SearchBox);

const Product = ({ hit }: any) => {
  return (
    <div style={{ marginTop: "10px", backgroundColor: "white" }}>
      <span
        className="hit-name"
        style={{ color: "black", backgroundColor: "white" }}
      >
        <a
          href={`/products/${hit.permalink}`}
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "20px",
          }}
        >
          <Highlight attribute="name" hit={hit} />
          <img src={hit.image.url} width="80" height="80" />
        </a>
      </span>
    </div>
  );
};

const Results = connectStateResults(({ searchState }: any) =>
  searchState && searchState.query ? <Hits hitComponent={Product} /> : null
);

const Search = () => {
  return (
    <div>
      <CustomSearchBox
        translations={{
          placeholder: "Search ",
        }}
      />
      <Results />
    </div>
  );
};

const NavBar = () => {
  const products = useCartSatet();
  console.log(products);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
    console.log(visible);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <div
        className={styles.wrapper}
        style={{ height: "200px", overflowY: "auto" }}
      >
        <div></div>
        <Link href="/" passHref>
          <Image
            src={vintage}
            width={300}
            height={150}
            alt="img"
            className={styles.img}
          />
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <InstantSearch indexName="products" searchClient={searchClient}>
            <Search />
          </InstantSearch>
          <Badge count={products.total_items} title="items">
            <ShoppingCartOutlined
              onClick={showModal}
              style={{ color: "white", fontSize: "30px" }}
            />
          </Badge>
        </div>
      </div>
      <section className={styles.section}>
        <Menu className={styles.menu} theme="dark">
          <Menu.Item>
            <Link href={"/"} passHref>
              <a className={styles.link}>Home </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={"/"} passHref>
              <a className={styles.link}>NewProduct</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={"/MatchWorn/matchworn"} passHref>
              <a className={styles.link}>MatchWorn</a>
            </Link>
          </Menu.Item>
        </Menu>
      </section>
      {visible ? (
        <CartModal
          visible={visible}
          handlerCancel={() => setVisible(false)}
          products={products}
        />
      ) : null}
    </div>
  );
};

export default NavBar;

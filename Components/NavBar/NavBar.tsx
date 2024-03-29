import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Menu, Badge, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollingLink } from "react-scroll";
import vintage from "../../public/vintage.jpg";
import styles from "./NavBar.module.css";
import { useCartSatet } from "../../context/cart";
import React, { useState } from "react";
import CartModal from "../CartModal/CartModal";
import { connectSearchBox } from "react-instantsearch-dom";
import SearchBox from "../SearchBox/SearchBox";
import Hits from "../Hits/Hits";
import { InstantSearch, Highlight } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { connectStateResults } from "react-instantsearch-dom";
import { connectHits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY
);
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(Hits);

const Results = connectStateResults(({ searchState }: any) =>
  searchState && searchState.query ? <CustomHits /> : null
);

const Search = () => {
  return (
    <div className={styles.searchwrapper}>
      <div className={styles.searchbox}>
        <CustomSearchBox
          translations={{
            placeholder: "Search ",
          }}
        />
      </div>
      <div className={styles.result}>
        <Results />
      </div>
    </div>
  );
};

const NavBar = () => {
  const products = useCartSatet();

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
            width={220}
            height={150}
            alt="img"
            className={styles.img}
            priority
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
      <div className={styles.section} style={{ position: "sticky", top: "0" }}>
        <Menu
          className={styles.menu}
          theme="dark"
          mode="horizontal"
          overflowedIndicator={<MenuOutlined />}
        >
          <Menu.Item key="Home">
            <Link href={"/"} passHref>
              <a className={styles.link}>Home </a>
            </Link>
          </Menu.Item>

          <Menu.SubMenu
            title={<a className={styles.link}>Products </a>}
            key="menuSub"
          >
            <Menu.Item key="Clubs">
              <ScrollingLink to="CLUBS" smooth={true} duration={1000}>
                <a>
                  <span>Clubs</span>
                  <style jsx>{`
                    a {
                      color: white;
                      font-size: 20px;
                    }
                  `}</style>
                </a>
              </ScrollingLink>
            </Menu.Item>

            <Menu.Item key="Nationals">
              <ScrollingLink to="NATIONS" smooth={true} duration={1000}>
                <a>
                  <span>Nations</span>
                  <style jsx>{`
                    a {
                      color: white;
                      font-size: 20px;
                    }
                  `}</style>
                </a>
              </ScrollingLink>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="matchworn">
            <Link href={"/MatchWorn/Matchworn"} passHref>
              <a className={styles.link}>MatchWorn</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="Basketball">
            <Link href={"/"} passHref>
              <a className={styles.link}>Basketball</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
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

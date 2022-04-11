import { ShoppingCartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Search from "antd/lib/input/Search";
import Image from "next/image";
import Link from "next/link";
import vintage from "../../public/vintage.jpg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className={styles.wrapper}>
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
        <ShoppingCartOutlined style={{ color: "white", fontSize: "30px" }} />
      </div>
      <section className={styles.section}>
        <Menu mode="horizontal" className={styles.menu} theme="dark">
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
            <Link href={"/"} passHref>
              <a className={styles.link}>MatchWorn</a>
            </Link>
          </Menu.Item>
        </Menu>
      </section>
    </div>
  );
};

export default NavBar;

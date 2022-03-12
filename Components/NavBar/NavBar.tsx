import { Menu } from "antd";
import Search from "antd/lib/input/Search";
import Image from "next/image";
import Link from "next/link";
import vintage from "../../public/vintage.jpg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/" passHref>
        <Image
          src={vintage}
          width={300}
          height={10}
          alt="img"
          className={styles.img}
        />
      </Link>

      <Menu mode="horizontal" className={styles.menu}>
        <Menu.Item>
          <Link href={"/"} passHref>
            <a className={styles.link}>Home </a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href={"/app/Profile"} passHref>
            <a className={styles.link}>NewProduct</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={"/app/TeacherDashboard"} passHref>
            <a className={styles.link}>MatchWorn</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Search
        placeholder="input search text"
        style={{
          width: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
};

export default NavBar;

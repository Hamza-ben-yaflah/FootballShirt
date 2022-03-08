import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import foot from "../../public/foot.jpg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={foot}
        width={60}
        height={60}
        alt="img"
        className={styles.img}
      />
      <Menu mode="horizontal" className={styles.menu}>
        <Menu.Item>
          <Link href={"/app"} passHref>
            <a className={styles.link}>Home </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={"/app/Teachers"} passHref>
            <a className={styles.link}>About</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={"/app/Profile"} passHref>
            <a className={styles.link}>NewProduct</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href={"/app/TeacherDashboard"} passHref>
            <a className={styles.link}>MatchWorn </a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;

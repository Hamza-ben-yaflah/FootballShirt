import { Content, Footer, Header } from "antd/lib/layout/layout";
import Head from "next/head";
import FooterComponent from "../FooterComponent/FooterComponent";
import NavBar from "../NavBar/NavBar";
import styles from "./layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>VintageShirt</title>
      </Head>
      <Header className={styles.header}>
        <NavBar />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        <FooterComponent />
      </Footer>
    </div>
  );
};

export default Layout;

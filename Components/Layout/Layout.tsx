import { Content, Footer, Header } from "antd/lib/layout/layout";
import Head from "next/head";
import CardContainer from "../CardContainer/CardContainer";
import FooterComponent from "../FooterComponent/FooterComponent";
import NavBar from "../NavBar/NavBar";
import styles from "./layout.module.css";

const Layout = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <Head>
        <title>FootBallShirt</title>
      </Head>
      <Header className={styles.header}>
        <NavBar />
      </Header>
      <Content>
        <CardContainer data={data} />
      </Content>
      <Footer className={styles.footer}>
        <FooterComponent />
      </Footer>
    </div>
  );
};

export default Layout;

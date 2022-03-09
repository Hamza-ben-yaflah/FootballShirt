import EnvironmentOutlined from "@ant-design/icons/lib/icons/EnvironmentOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";
import { Divider, Typography } from "antd";
import styles from "./FooterComponent.module.css";
const { Title } = Typography;
const FooterComponent = () => {
  return (
    <div className={styles.Cont}>
      <div className={styles.container}>
        <ul className={styles.parag}>
          <Title level={5} underline={true} type="danger">
            NOS SRVICES
          </Title>

          <li>
            <a>Livrison</a>
          </li>
          <li>
            <a>Garantie</a>
          </li>
          <li>
            <a>Donner votre avis</a>
          </li>
        </ul>
        <ul className={styles.parag}>
          <Title level={5} underline={true} type="danger">
            PRODUCTS
          </Title>
          <li>
            <a>Shirt</a>
          </li>
          <li>
            <a>Livrison</a>
          </li>
          <li>
            <a>Livrison</a>
          </li>
        </ul>
        <ul className={styles.parag}>
          <Title level={5} underline={true} type="danger">
            CONTACT
          </Title>
          <li>
            <a>
              <MailOutlined /> exemple@example.com
            </a>
          </li>
          <li>
            <a>
              <PhoneOutlined />
              6666666
            </a>
          </li>
          <li>
            <a>
              <EnvironmentOutlined /> Hay Zhour
            </a>
          </li>
        </ul>
        <div className={styles.parag}>
          <Title level={5} underline={true} type="danger">
            SUIVEZ-NOUS
          </Title>
          <a>
            <FacebookOutlined style={{ fontSize: 35 }} />
          </a>
          <a>
            <InstagramOutlined style={{ fontSize: 35 }} />
          </a>
          <a>
            <YoutubeOutlined style={{ fontSize: 39 }} />
          </a>
        </div>
      </div>
      <Divider className={styles.divider}></Divider>
      <strong className={styles.Copy}>FootBall Shirt ©2022 Created by</strong>
    </div>
  );
};

export default FooterComponent;

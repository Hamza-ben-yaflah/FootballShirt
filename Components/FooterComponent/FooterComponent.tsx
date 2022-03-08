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
        <div className={styles.wrapper}>
          <Title level={5} underline={true} type="danger">
            NOS SRVICE
          </Title>
          <ul className={styles.parag}>
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
        </div>
        <div className={styles.parag}>
          <Title level={5} underline={true} type="danger">
            PRODUCTS
          </Title>
          <a>Livrison</a>
          <br />
          <a>Garantie</a>
          <br />
          <a>Donner votre avis</a>
          <br />
          <a>Livrison</a>
        </div>
        <div className={styles.parag}>
          <Title level={5} underline={true} type="danger">
            CONTACT
          </Title>

          <a>
            <MailOutlined /> exemple@example.com
          </a>
          <br />
          <a>
            <PhoneOutlined />
            6666666
          </a>
          <br />
          <a>
            <EnvironmentOutlined /> Hay Zhour
          </a>
          <br />
        </div>
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

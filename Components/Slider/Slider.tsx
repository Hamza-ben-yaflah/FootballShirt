import { Button, Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import vintage from "../../public/arsenal.jpg";
import real from "../../public/real.jpg";
import Typography from "antd/lib/typography";
import styles from "./Slider.module.css";

const { Text, Title } = Typography;

const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <Row justify="space-around">
        <Col flex="center">
          <div className={styles.container}>
            <Image src={vintage} width={600} height={500} alt="img" />
            <div className={styles.shopTitle}>
              <span> LASTEEST </span>
            </div>
            <div className={styles.shopButton}>
              <button className={styles.button}>
                <span className={styles.span}>Shop Now</span>
              </button>
            </div>
          </div>
        </Col>
        <Col>
          <div className={styles.container}>
            <Image src={vintage} width={600} height={500} alt="img" />
            <div className={styles.shopTitle}>
              <span> MATCH WORN </span>
            </div>
            <div className={styles.shopButton}>
              <button className={styles.button}>
                <span className={styles.span}>Shop Now</span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;

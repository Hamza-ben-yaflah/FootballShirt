/* eslint-disable @next/next/no-html-link-for-pages */

import { Button, Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import vintage from "../../public/arsenal.jpg";

import "react-slideshow-image/dist/styles.css";

import Typography from "antd/lib/typography";
import styles from "./Slider.module.css";
import { Link } from "react-scroll";

const { Text, Title } = Typography;

const Slider = () => {
  return (
    <div
      style={{ marginTop: "5px", marginRight: "5px", marginLeft: "5px" }}
      data-testid="slider"
    >
      <Row wrap gutter={2}>
        <Col lg={12}>
          <div className={styles.container}>
            <Image
              src={vintage}
              alt="silderImage"
              className={styles.img}
              priority
            />
            <Link to="CLUBS" smooth={true} duration={1000}>
              <div className={styles.shopButton}>
                <button className={styles.button}>
                  <span className={styles.span}>New Products</span>
                </button>
              </div>
            </Link>
          </div>
        </Col>
        <Col lg={12}>
          <div className={styles.container}>
            <Image src={vintage} alt="silderImage" className={styles.img} />
            <a href="/MatchWorn/Matchworn" data-testid="link">
              <div className={styles.shopButton}>
                <button className={styles.button}>
                  <span className={styles.span}>Match Worn</span>
                </button>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;

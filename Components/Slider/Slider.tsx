/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import vintage from "../../public/image.jpg";
import vini from "../../public/soccer.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import real from "../../public/real.jpg";
import Typography from "antd/lib/typography";
import styles from "./Slider.module.css";
import { Link } from "react-scroll";

const { Text, Title } = Typography;

const Slider = () => {
  const images = [
    {
      url: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Football-Field-Backgrounds.jpg",
      caption: "Slide 1",
    },
    {
      url: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Football-Field-Backgrounds.jpg",
      caption: "Slide 2",
    },
  ];

  return (
    <Row wrap>
      <Col lg={24}>
        <Slide>
          {images.map((slideImage, index) =>
            index === 0 ? (
              <div key={index} className={styles.container}>
                <img
                  src={slideImage.url}
                  width="100%"
                  height="100%"
                  alt="silderImage"
                />
                <Link to="shirts" smooth={true} duration={1000}>
                  <div className={styles.shopButton}>
                    <button className={styles.button}>
                      <span className={styles.span}>Shop Now</span>
                    </button>
                  </div>
                </Link>
              </div>
            ) : (
              <div key={index} className={styles.container}>
                <img
                  src={slideImage.url}
                  width="100%"
                  height="100%"
                  alt="silderImage"
                />
                <a href="/MatchWorn/matchworn">
                  <div className={styles.shopButton}>
                    <button className={styles.button}>
                      <span className={styles.span}>Shop Now</span>
                    </button>
                  </div>
                </a>
              </div>
            )
          )}
        </Slide>
      </Col>
    </Row>
  );
};

export default Slider;

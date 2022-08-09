import React from "react";
import styles from "./Hit.module.css";
import Image from "next/Image";
const Hit = ({ hit }) => {
  return (
    <div className={styles.globalwrapper}>
      <span className={styles.spanwrapper}>
        <a href={`/products/${hit.permalink}`} className={styles.wrapper}>
          <div className={styles.container}>
            <span className={styles.span}>{hit.name}</span>
            <h5 style={{ textAlign: "center" }}>
              {hit.price.formatted_with_symbol}
            </h5>
          </div>
          <Image
            src={hit.image.url}
            alt="shirtImage"
            className={styles.img}
            width={100}
            height={100}
            priority
          />
        </a>
      </span>
    </div>
  );
};

export default Hit;

import React from "react";
import styles from "./Hit.module.css";
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
          <img src={hit.image.url} alt="shirtImage" className={styles.img} />
        </a>
      </span>
    </div>
  );
};

export default Hit;

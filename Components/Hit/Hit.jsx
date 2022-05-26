import React from "react";
import styles from "./Hit.module.css";
const Hit = ({ hit }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <span
        className="hit-name"
        style={{ color: "black", backgroundColor: "white" }}
      >
        <a href={`/products/${hit.permalink}`} className={styles.wrapper}>
          <div className={styles.container}>
            <span style={{ height: "30px", textDecoration: "underline" }}>
              {hit.name}
            </span>
            <h5 style={{ textAlign: "center" }}>
              {hit.price.formatted_with_symbol}
            </h5>
          </div>
          <img src={hit.image.url} width="90" height="90" alt="shirtImage" />
        </a>
      </span>
    </div>
  );
};

export default Hit;

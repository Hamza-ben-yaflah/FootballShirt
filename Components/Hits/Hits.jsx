import React from "react";
import Hit from "../Hit/Hit";
import styles from "./Hits.module.css";

const Hits = ({ hits }) => {
  return (
    <div className={styles.wrapper}>
      <ol>
        {hits.map((hit) => (
          <Hit hit={hit} key={hit.id} />
        ))}
      </ol>
    </div>
  );
};

export default Hits;

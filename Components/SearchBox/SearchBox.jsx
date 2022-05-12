import React from "react";
import styles from "./SearchBox.module.css";

import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  return (
    <div noValidate action="" role="search" className={styles.SearchBox}>
      <button onClick={() => refine("")} className={styles.btn}>
        <SearchOutlined style={{ fontSize: "24px" }} />
      </button>

      <input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        className={styles.inputsearch}
        placeholder="Search "
      />

      {isSearchStalled ? "My search is stalled" : ""}
    </div>
  );
};

export default SearchBox;

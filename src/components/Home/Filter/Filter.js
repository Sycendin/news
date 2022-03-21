import React, { Fragment } from "react";
import FilterButtons from "./FilterButtons/FiilterButtons";
const Filter = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          backgroundColor: " rgb(212, 214, 215)",
          marginTop: 50,
        }}
      >
        <FilterButtons />
      </div>
    </Fragment>
  );
};
export default Filter;

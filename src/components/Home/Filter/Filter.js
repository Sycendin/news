import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "./FilterButtons/FiilterButtons";
import nintendoData from "./FilterContent/Nintendo";

import CardList from "../../Cards/CardList";
const Filter = () => {
  const select = useSelector((state) => state.filterSelect);
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
        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CardList
            info={nintendoData}
            displayDirection="column"
            marginColumn={20}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Filter;

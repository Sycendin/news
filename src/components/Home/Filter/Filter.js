import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "./FilterButtons/FiilterButtons";
import nintendoData from "./FilterContent/Nintendo";
import playstationData from "./FilterContent/Playstation";
import pcData from "./FilterContent/PC";
import CardList from "../../Cards/CardList";
import xboxData from "./FilterContent/Xbox";
const Filter = () => {
  let data = nintendoData;
  const select = useSelector((state) => state.filterSelect);
  if (select === "NINTENDO") {
    data = nintendoData;
  } else if (select === "PLAYSTATION") {
    data = playstationData;
  } else if (select === "XBOX") {
    data = xboxData;
  } else {
    data = pcData;
  }
  return (
    <Fragment>
      <div
        style={{
          margin: "auto",
          width: "66%",
          backgroundColor: " rgb(212, 214, 215)",
          borderRadius: 10,
        }}
      >
        <h1
          style={{
            textDecoration: "underline",
            textAlign: "left",
            marginBottom: 30,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          News
        </h1>
        <div
          style={{
            display: "flex",
            justifyItems: "left",
          }}
        >
          <FilterButtons />
        </div>

        <div
          style={{
            marginTop: 10,
            marginLeft: 10,
            display: "flex",
            justifyContent: "left",
          }}
        >
          <CardList info={data} displayDirection="column" marginColumn={20} />
        </div>
      </div>
    </Fragment>
  );
};
export default Filter;

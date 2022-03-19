import React, { Fragment } from "react";
import SingleCard from "./Card";
const CardList = ({ info }) => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {info.map((data, i) => {
          return <SingleCard title={info[i].title} image={info[i].image} />;
        })}
      </div>
    </Fragment>
  );
};
export default CardList;

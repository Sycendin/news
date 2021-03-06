import React, { Fragment } from "react";
import CardList from "../../Cards/CardList";
import guideData from "./GuideData";
const Guide = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(212, 214, 215)",
          marginTop: 50,
        }}
      >
        <h1
          style={{
            textDecoration: "underline",
            marginBottom: 30,
            fontWeight: "bold",
          }}
        >
          Latest Guides
        </h1>
        <CardList type={"guide"} info={guideData} displayDirection="row" />
        <div
          style={{
            width: "100%",
            height: 30,
            marginBottom: 50,
            backgroundColor: "rgb(212, 214, 215)",
          }}
        ></div>
      </div>
    </Fragment>
  );
};
export default Guide;

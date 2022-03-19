import React, { Fragment } from "react";
import CardList from "../../Cards/CardList";
import guideData from "./GuideData";
const Guide = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          backgroundColor: " rgba(0, 0, 0, 0.2)",
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
        <CardList info={guideData} />
      </div>
    </Fragment>
  );
};
export default Guide;

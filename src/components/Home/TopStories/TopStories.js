import React, { Fragment } from "react";
import CardList from "./TopStoryCards/CardList";
const TopStories = () => {
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
          Today's Top stories
        </h1>
        <CardList />
      </div>
    </Fragment>
  );
};
export default TopStories;

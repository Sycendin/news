import React, { Fragment } from "react";
import CardList from "../../Cards/CardList";
import storiesData from "./StoriesData";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
const TopStories = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          backgroundColor: " rgb(212, 214, 215)",
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
        <CardList type={"top"} info={storiesData} displayDirection="row" />
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
export default TopStories;

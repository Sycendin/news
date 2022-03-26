import React, { Fragment } from "react";
import Backgroundimage from "./BackgroundImage/BackgroundImage";
import TopStories from "./TopStories/TopStories";
import Guide from "./Guide/Guide";
import Filter from "./Filter/Filter";
const Home = () => {
  return (
    <Fragment>
      <Backgroundimage />

      <TopStories />
      <Guide />
      <Filter />
    </Fragment>
  );
};
export default Home;

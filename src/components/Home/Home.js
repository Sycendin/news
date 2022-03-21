import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions/actions";
import Header from "./Header/Header";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Backgroundimage from "./BackgroundImage/BackgroundImage";
import TopStories from "./TopStories/TopStories";
import Guide from "./Guide/Guide";
import Filter from "./Filter/Filter";
const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const changeCounter = () => {
    dispatch(increment(1));
  };
  return (
    <Fragment>
      <Header></Header>
      <Backgroundimage />
      <TopStories />
      <Guide />
      <Filter />
    </Fragment>
  );
};
export default Home;

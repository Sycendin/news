import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions/actions";
import Header from "./Header/Header";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Backgroundimage from "./BackgroundImage/BackgroundImage";
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
    </Fragment>
  );
};
export default Home;

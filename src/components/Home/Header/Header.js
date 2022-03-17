import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../actions/actions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";
import Navigation from "./Navigation/Nav";
const Header = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const changeCounter = () => {
    dispatch(increment(1));
  };
  return (
    <Fragment>
      <Navigation />
    </Fragment>
  );
};
export default Header;

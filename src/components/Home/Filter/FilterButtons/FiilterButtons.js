import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { nintendo, xbox, playStation, pc } from "../../../../actions/actions";
const FilterButtons = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counterReducer);
  const changeFilter = (filter) => {
    if (filter === "nintendo") {
      dispatch(nintendo());
    } else if (filter === "playstation") {
      dispatch(playStation());
    } else if (filter === "xbox") {
      dispatch(xbox());
    } else {
      dispatch(pc());
    }
  };
  return (
    <Fragment>
      <Button
        style={{ marginLeft: 20, marginRight: 10, borderRadius: 20 }}
        onClick={() => changeFilter("nintendo")}
        variant="dark"
      >
        NINTENDO
      </Button>{" "}
      <Button
        style={{ marginRight: 10, borderRadius: 20 }}
        onClick={() => changeFilter("playstation")}
        variant="dark"
      >
        PlayStation
      </Button>{" "}
      <Button
        style={{ marginRight: 10, borderRadius: 20 }}
        onClick={() => changeFilter("xbox")}
        variant="dark"
      >
        XBOX
      </Button>{" "}
      <Button
        style={{ marginRight: 10, borderRadius: 20 }}
        onClick={() => changeFilter("pc")}
        variant="dark"
      >
        PC
      </Button>{" "}
    </Fragment>
  );
};
export default FilterButtons;

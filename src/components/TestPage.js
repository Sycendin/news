import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions/actions";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const changeCounter = () => {
    dispatch(increment(1));
  };
  return (
    <Fragment>
      <h1 className="">Test Redux Page</h1>
      <div className="">
        <p>{counter}</p>
        <button onClick={changeCounter} className="">
          Increase
        </button>
      </div>
    </Fragment>
  );
};
export default Counter;

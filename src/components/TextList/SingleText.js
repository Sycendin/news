import React, { Fragment } from "react";
const SingleText = ({ text }) => {
  return (
    <Fragment>
      {text.substring(0, 2) === "--" ? (
        <h2>{text.substring(2)}</h2>
      ) : (
        <p>{text.substring(2)}</p>
      )}
      <br></br>
    </Fragment>
  );
};

export default SingleText;

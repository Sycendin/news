import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NotFound = () => {
  return (
    <Fragment>
      {" "}
      <h1>404 - Not Found!</h1>
      <Link to="/news/">
        <Button variant="primary">Go Back Home</Button>
      </Link>
      {/* <Link to="/">Go Home</Link> */}
    </Fragment>
  );
};

export default NotFound;

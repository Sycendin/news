import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
const SingleCard = ({ title, image }) => {
  return (
    <Fragment>
      <Card style={{ width: 284, backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + image} />
        <Card.Title>{title}</Card.Title>
      </Card>
    </Fragment>
  );
};
export default SingleCard;

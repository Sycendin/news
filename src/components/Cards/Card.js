import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
const SingleCard = ({ i, title, image, marginColumn }) => {
  return (
    <Fragment>
      <Card
        key={i}
        border="dark"
        style={{
          width: 284,
          backgroundColor: " rgb(212, 214, 215)",
          marginBottom: marginColumn,
        }}
      >
        <Card.Img variant="top" src={process.env.PUBLIC_URL + image} />
        <Card.Title>{title}</Card.Title>
      </Card>
      )
    </Fragment>
  );
};
export default SingleCard;

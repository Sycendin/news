import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
const SingleCard = ({ i, title, image, marginColumn, text }) => {
  return (
    <Fragment>
      {marginColumn !== 20 ? (
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
      ) : (
        <div
          className="block-example border-bottom border-dark"
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "3px solid rgb(212, 212, 212)",
            marginTop: 10,
          }}
        >
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
          </Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <h3 style={{ marginTop: 10, marginLeft: 10 }}>{title}</h3>
            <p style={{ marginLeft: 10 }}>{text}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default SingleCard;

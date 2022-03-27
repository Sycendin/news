import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const SingleCard = ({ i, title, image, marginColumn, text, type }) => {
  let link = "";
  if (type === "top") {
    link = "/news/article/";
  } else if (type === "guide") {
    link = "/news/guide/";
  } else if (type === "filter") {
    link = "/news/filter/";
  }

  return (
    <Fragment>
      {marginColumn !== 20 ? (
        <Link to={link + title}>
          <Card
            key={i}
            border="dark"
            style={{
              backgroundColor: " rgb(212, 214, 215)",
              marginBottom: marginColumn,
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <Card.Img variant="top" src={process.env.PUBLIC_URL + image} />
            <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          </Card>
        </Link>
      ) : (
        <Link to={link + title}>
          <div
            className="block-example border-bottom border-dark"
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "3px solid rgb(212, 212, 212)",
              marginTop: 10,
            }}
          >
            <img
              className="img"
              style={{ maxWidth: "40%", height: "auto" }}
              src={process.env.PUBLIC_URL + image}
              alt={i}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3 style={{ color: "black", marginTop: 10, marginLeft: 10 }}>
                {title}
              </h3>
              <p style={{ color: "black", marginLeft: 10 }}>{text}</p>
            </div>
          </div>
        </Link>
      )}
    </Fragment>
  );
};
export default SingleCard;

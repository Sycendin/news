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
              maxWidth: 284,
            }}
          >
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + image}
              alt={i}
              style={{}}
            />
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
            <div
              className="img-hover-zoom"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                maxWHeight: "auto",
              }}
            >
              <img
                className="img"
                style={{ maxWidth: "100%", maxWHeight: "auto" }}
                src={process.env.PUBLIC_URL + image}
                alt={i}
              />
            </div>
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

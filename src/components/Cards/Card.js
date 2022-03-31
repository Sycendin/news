import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const SingleCard = ({ i, title, image, marginColumn, text, type, path }) => {
  return (
    <Fragment>
      {marginColumn !== 20 ? (
        <Link to={path}>
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
              src={image}
              alt="Card"
              width={284}
              height={160}
              style={{ Width: "100%", height: "auto" }}
            />
            <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          </Card>
        </Link>
      ) : (
        <Link to={path}>
          <div
            className="block-example border-bottom border-top border-dark"
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
                width={284}
                height={160}
                className="img"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={image}
                alt="Card"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  display: "block",
                  fontSize: 25,
                  marginBottom: 16,
                  fontWeight: "bold",
                  color: "black",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                {title}
              </p>
              <p style={{ color: "black", marginLeft: 10 }}>{text}</p>
            </div>
          </div>
        </Link>
      )}
    </Fragment>
  );
};
export default SingleCard;

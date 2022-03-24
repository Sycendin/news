import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./Card.css";
import { useDispatch } from "react-redux";
import { changeTopStories, changeGuides } from "../../actions/actions";
import { Link } from "react-router-dom";
const SingleCard = ({ i, title, image, marginColumn, text, type, index }) => {
  let link = "";
  if (type === "top") {
    link = "/article/";
  } else if (type === "guide") {
    link = "/guide/";
  }
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counterReducer);
  const change = (filter) => {
    console.log(index);
    console.log(type);
    if (index === 0) {
      if (type === "top") {
        dispatch(changeTopStories(0));
      } else {
        dispatch(changeGuides(0));
      }
    } else if (index === 1) {
      if (type === "top") {
        dispatch(changeTopStories(1));
      } else {
        dispatch(changeGuides(1));
      }
    } else if (index === 2) {
      if (type === "top") {
        dispatch(changeTopStories(2));
      } else {
        dispatch(changeGuides(2));
      }
    } else if (index === 3) {
      if (type === "top") {
        dispatch(changeTopStories(3));
      } else {
        dispatch(changeGuides(3));
      }
    }
  };

  return (
    <Fragment>
      {marginColumn !== 20 ? (
        <Link to={link + title}>
          <Card
            onClick={() => change(i)}
            key={i}
            border="dark"
            style={{
              width: 284,
              backgroundColor: " rgb(212, 214, 215)",
              marginBottom: marginColumn,
            }}
          >
            <Card.Img variant="top" src={process.env.PUBLIC_URL + image} />
            <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          </Card>
        </Link>
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

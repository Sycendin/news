import React, { Fragment } from "react";
import { Image, Carousel, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeBanner } from "../../../actions/actions";
import "./BackgroundImage.css";
const Backgroundimage = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counterReducer);
  const change = (filter) => {
    console.log(filter);
    if (filter === 0) {
      dispatch(changeBanner(0));
    } else if (filter === 1) {
      dispatch(changeBanner(1));
    } else if (filter === 2) {
      dispatch(changeBanner(2));
    }
  };
  return (
    <Fragment>
      <Carousel
        interval={5000}
        style={{
          width: "66%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
        }}
      >
        <Carousel.Item
          style={{
            width: "100%",

            borderRadius: 10,
          }}
        >
          <Image
            src={process.env.PUBLIC_URL + "/images/background3.jpg"}
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 10,
            }}
            responsive="true"
          ></Image>
          <Carousel.Caption>
            <h3 className="stroke-text">Elden Ring</h3>
            <Link to="/banner/elden">
              <Button onClick={() => change(0)}>Check it Out.</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item
          style={{
            width: "100%",
            borderRadius: 10,
          }}
        >
          <Image
            src={process.env.PUBLIC_URL + "/images/ghostwire.jpg"}
            responsive="true"
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 10,
            }}
          ></Image>
          <Carousel.Caption>
            <h3 className="stroke-text">Ghostwire Tokyo</h3>

            <Link to="/banner/ghostwire">
              <Button onClick={() => change(1)}>Check it Out.</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            width: "100%",
            borderRadius: 10,
          }}
        >
          <Image
            src={process.env.PUBLIC_URL + "/images/kirby.jpg"}
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 10,
            }}
            responsive="true"
          ></Image>
          <Carousel.Caption>
            <h3 className="stroke-text">Kirby and the Forgotten Land</h3>

            <Link to="/banner/kirby">
              <Button onClick={() => change(2)}>Check it Out.</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </Fragment>
  );
};
export default Backgroundimage;

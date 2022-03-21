import React, { Fragment } from "react";
import { Image, Carousel, Button } from "react-bootstrap";
import "./BackgroundImage.css";
const Backgroundimage = () => {
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

            <Button>Check it Out.</Button>
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
            <Button>Check it Out.</Button>
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

            <Button>Check it Out.</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </Fragment>
  );
};
export default Backgroundimage;

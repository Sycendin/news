import React, { Fragment } from "react";
import { Image, Carousel, Button } from "react-bootstrap";
const Backgroundimage = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <Image
            src={process.env.PUBLIC_URL + "/images/background3.jpg"}
            responsive
            style={{ height: "200", width: "50%" }}
          ></Image>
          <Carousel.Caption>
            <h3>Elden Ring</h3>
            <Button>Check it Out.</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </Fragment>
  );
};
export default Backgroundimage;

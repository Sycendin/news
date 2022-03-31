import React, { useEffect, useState, Fragment } from "react";
import { Image, Carousel, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeBanner } from "../../../actions/actions";
import bannerData from "../../../BannerPages/BannerPageData/BannerData";
import { debounce } from "../../../HelperFunctions/HelperFunctions";
import "./BackgroundImage.css";
const Backgroundimage = () => {
  //process.env.PUBLIC_URL + latestBanners[1].image
  // State that keep track of the screen witdh
  const [screenWidth, setDimensions] = useState({
    width: window.innerWidth,
  });

  // After rendering add event listener that calls function when screen
  // is resized, then call debounced function that will set the new width
  // and re-render

  // imported debounce function will only allow resize function to run every second
  // To improve performance

  // Afterwards return and clean up event listeners to stop memory leaks
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const latestBanners = bannerData.slice(-3);
  const dispatch = useDispatch();

  const change = (filter) => {
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
      <div
        style={{
          width: "66%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
          backgroundColor: "black",
        }}
      >
        <Carousel
          interval={5000}
          style={{
            width: "100%",
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
              src={
                screenWidth.width > 600
                  ? latestBanners[2].image
                  : latestBanners[2].smallImage
              }
              style={{
                width: "100%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 10,
              }}
              alt="banner1"
              responsive="true"
            ></Image>
            <Carousel.Caption>
              <h3 className="stroke-text">{latestBanners[2].title}</h3>
              <Link to={"/news/banner/" + latestBanners[2].title}>
                <Button onClick={() => change(2)}>Check it Out.</Button>
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
              src={
                screenWidth.width > 600
                  ? latestBanners[1].image
                  : latestBanners[1].smallImage
              }
              responsive="true"
              style={{
                width: "100%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 10,
              }}
              alt="banner2"
            ></Image>
            <Carousel.Caption>
              <h3 className="stroke-text">{latestBanners[1].title}</h3>

              <Link to={"/news/banner/" + latestBanners[1].title}>
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
              src={
                screenWidth.width > 600
                  ? latestBanners[0].image
                  : latestBanners[0].smallImage
              }
              style={{
                width: "100%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 10,
              }}
              alt="banner3"
              responsive="true"
            ></Image>
            <Carousel.Caption>
              <h3 className="stroke-text">{latestBanners[0].title}</h3>

              <Link to={"/news/banner/" + latestBanners[0].title}>
                <Button onClick={() => change(0)}>Check it Out.</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};
export default Backgroundimage;

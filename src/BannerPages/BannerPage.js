import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";

import { useSelector } from "react-redux";
import bannerData from "./BannerPageData/BannerData";
const BannerPage = () => {
  const select = useSelector((state) => state.bannerChange);
  return (
    <Fragment>
      <div
        style={{
          margin: "auto",
          width: "66%",
          backgroundColor: " rgb(212, 214, 215)",
          borderRadius: 10,
        }}
      >
        <h1
          style={{
            textDecoration: "underline",
            textAlign: "left",
            marginBottom: 30,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          {bannerData[select].title}
        </h1>
        <h3
          style={{
            textAlign: "left",
            marginBottom: 30,
            marginLeft: 10,
          }}
        >
          {bannerData[select].subtitle}
        </h3>
        <img
          src={`${process.env.PUBLIC_URL + bannerData[select].image}`}
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            height: 400,
          }}
        ></img>

        <div
          className="block-example border-bottom border-dark"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignContent: "left",
            marginTop: 10,
            marginBottom: 5,
            borderBottom: "3px solid rgb(212, 212, 212)",
          }}
        >
          <Image
            src={
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
            }
            roundedCircle={true}
            style={{
              width: 50,
              height: 50,
              marginLeft: 5,
            }}
          ></Image>
          <p style={{ marginTop: 10, marginLeft: 5, fontWeight: "bold" }}>
            By John Doe
          </p>
          <p style={{ marginTop: 10, marginLeft: 5 }}>
            | Posted: March 22, 2022
          </p>
        </div>

        <h3 style={{ whiteSpace: "pre-line" }}>{bannerData[select].text}</h3>
      </div>
    </Fragment>
  );
};
export default BannerPage;

import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";

import NotFound from "../NotFound/NotFound";
import nintendoData from "../Home/Filter/FilterContent/Nintendo";
import playstationData from "../Home/Filter/FilterContent/Playstation";
import xboxData from "../Home/Filter/FilterContent/Xbox";
import pcData from "../Home/Filter/FilterContent/PC";
import otherData from "../Home/Filter/FilterContent/Other";
const ArticleFiltersPage = () => {
  let data = {};
  let error = false;
  const firstPath = window.location.pathname.split("/")[3];
  if (firstPath === "nin") {
    data = nintendoData;
  } else if (firstPath === "xbox") {
    data = xboxData;
  } else if (firstPath === "play") {
    data = playstationData;
  } else if (firstPath === "pc") {
    data = pcData;
  } else if (firstPath === "other") {
    data = otherData;
  }

  const currentUrl = window.location.pathname;
  let foundPath = data.find((singlePath) => singlePath.path === currentUrl);
  if (foundPath === undefined) {
    error = true;
  }

  return (
    <Fragment>
      {error === false ? (
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
            {foundPath.title}
          </h1>
          <h3
            style={{
              textAlign: "left",
              marginBottom: 30,
              marginLeft: 10,
            }}
          >
            {foundPath.text}
          </h3>
          <img
            src={`${foundPath.image}`}
            alt="banner"
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "auto",
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
          <div>
            <h3>Filler</h3>
            {/* <TextList data={bannerData[select].text} /> */}
          </div>
          {/* <h3 style={{ whiteSpace: "pre-line" }}>{bannerData[select].text}</h3> */}
        </div>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
};

export default ArticleFiltersPage;

import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";
import bannerData from "./BannerPageData/BannerData";
import TextList from "../components/TextList/TextList";
import NotFound from "../components/NotFound/NotFound";
import { PathFinder } from "../HelperFunctions/HelperFunctions";
const BannerPage = () => {
  let error = false;
  // Helper function checks the url and loads correct data based
  // on what section it is
  let foundPath = PathFinder(bannerData, "banner");
  if (foundPath === true) {
    error = foundPath;
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
            {foundPath.articleTitle}
          </h1>
          <h3
            style={{
              textAlign: "left",
              marginBottom: 30,
              marginLeft: 10,
            }}
          >
            {foundPath.subtitle}
          </h3>
          <img
            src={`${foundPath.image}`}
            alt="banner"
            style={{
              width: "100%",
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
              alt="banner"
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
            <TextList data={foundPath.text} />
          </div>
          {/* <h3 style={{ whiteSpace: "pre-line" }}>{bannerData[select].text}</h3> */}
        </div>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
};
export default BannerPage;

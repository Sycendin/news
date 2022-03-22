import React, { Fragment } from "react";
const BannerPage = () => {
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
          News
        </h1>
      </div>
    </Fragment>
  );
};
export default BannerPage;

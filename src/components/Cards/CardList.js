import React, { Fragment } from "react";
import SingleCard from "./Card";
const CardList = ({ type, info, displayDirection, marginColumn }) => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: displayDirection,
          justifyContent: "space-evenly",
        }}
      >
        {info.map((data, i) => {
          return (
            <SingleCard
              index={i}
              key={i}
              title={info[i].title}
              image={info[i].image}
              marginColumn={marginColumn}
              text={info[i].text}
              type={type}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
export default CardList;

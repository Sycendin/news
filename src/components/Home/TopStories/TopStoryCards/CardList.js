import React, { Fragment } from "react";
import storiesData from "../StoriesData";
import StoryCard from "./Card";
const CardList = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {storiesData.map((data, i) => {
          return (
            <StoryCard
              title={storiesData[i].title}
              image={storiesData[i].image}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
export default CardList;

import React, { Fragment } from "react";
import SingleCard from "./Card";
const CardList = ({ type, info, displayDirection, marginColumn }) => {
  const lastestGuideAndTopstories = info.slice(-4);
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
          // Only display 4 items from guid and topstories on the front page
          if (type === "guide" || type === "top") {
            if (type === "top") {
              marginColumn = 30;
            }
            return (
              <SingleCard
                key={i}
                title={
                  lastestGuideAndTopstories[
                    lastestGuideAndTopstories.length - 1 - i
                  ].title
                }
                image={
                  lastestGuideAndTopstories[
                    lastestGuideAndTopstories.length - 1 - i
                  ].imageSmall
                }
                marginColumn={marginColumn}
                text={
                  lastestGuideAndTopstories[
                    lastestGuideAndTopstories.length - 1 - i
                  ].text
                }
                type={type}
              />
            );
          } else {
            return (
              <SingleCard
                key={i}
                title={info[info.length - 1 - i].title}
                image={info[info.length - 1 - i].imageSmall}
                marginColumn={marginColumn}
                text={info[info.length - 1 - i].text}
                type={type}
              />
            );
          }
        })}
      </div>
    </Fragment>
  );
};
export default CardList;

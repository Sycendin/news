import React, { Fragment } from "react";
import SingleText from "./SingleText";
const TextList = ({ data }) => {
  return (
    <Fragment>
      <div>
        {data.map((data, i) => {
          return <SingleText key={i} text={data} />;
        })}
      </div>
    </Fragment>
  );
};

export default TextList;

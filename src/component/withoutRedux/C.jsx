import React from "react";

const C = ({ dataName, loc }) => {
  return (
    <div className="cComp">
      <h1>
        Name: <b>{dataName}</b>{" "}
      </h1>
      <h1>
        Location: <b>{loc}</b>
      </h1>
    </div>
  );
};

export default C;

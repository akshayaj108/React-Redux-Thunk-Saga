import React from "react";
import { useSelector } from "react-redux";

const F = () => {
  const globalState = useSelector((state) => state);
  const name = globalState.nameLoc.name;
  const loc = globalState.nameLoc.loc;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>location:{loc}</h1>
    </div>
  );
};

export default F;

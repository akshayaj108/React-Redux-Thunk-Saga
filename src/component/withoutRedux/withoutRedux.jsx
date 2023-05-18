import React, { useState } from "react";
import A from "./A";
import B from "./B";
import C from "./C";

const WithoutRedux = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const getName = (Passedname) => {
    setName(Passedname);
  };
  const callLoc = (locFromBcompInput) => {
    setLocation(locFromBcompInput);
  };
  return (
    <div className="wrd">
      <A getName={getName} />
      <B getLoc={callLoc} />
      <C dataName={name} loc={location} />
    </div>
  );
};

export default WithoutRedux;

import React, { createRef } from "react";

const B = ({ getLoc }) => {
  const locRef = createRef(null);
  const handleInput = () => {
    const loc = locRef?.current?.value;
    getLoc(loc);
  };
  return (
    <p>
      <input type="text" ref={locRef} />
      <button onClick={handleInput}>Add Location</button>
    </p>
  );
};

export default B;

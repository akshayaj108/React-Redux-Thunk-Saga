import React, { createRef } from "react";

const A = ({ getName }) => {
  const nameRef = createRef(null);
  const handleInput = () => {
    const name = nameRef?.current?.value;

    getName(name);
  };

  return (
    <p>
      <input type="text" ref={nameRef} />
      <button onClick={handleInput}>Add Name</button>
    </p>
  );
};

export default A;

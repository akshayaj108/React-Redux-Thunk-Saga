import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const D = () => {
  const dispatched = useDispatch();
  const nameRef = useRef("");
  const handleChange = () => {
    const name = nameRef.current.value;
    dispatched({
      type: "NAME",
      payload: name,
    });
  };
  return (
    <p>
      <label htmlFor="">Name</label>
      <input type="text" ref={nameRef} />
      <button onClick={handleChange}>Add Name</button>
    </p>
  );
};

export default D;

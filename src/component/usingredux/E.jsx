import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const E = () => {
  const dispatched = useDispatch();
  const locationRef = useRef("");
  const handleChange = () => {
    const location = locationRef.current.value;
    dispatched({
      type: "LOC",
      payload: location,
    });
  };
  return (
    <p>
      <label htmlFor="">Location</label>
      <input type="text" ref={locationRef} />
      <button onClick={handleChange}>Add Location</button>
    </p>
  );
};

export default E;

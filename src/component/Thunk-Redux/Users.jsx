import axios from "axios";
import React from "react";
import getUsers from "../../Actions/userThunkAction";
import { useDispatch } from "react-redux";

const Users = () => {
  const dispatched = useDispatch();
  const handleUsers = () => {
    dispatched(getUsers());
  };
  return (
    <div>
      <button onClick={handleUsers}> Users</button>
    </div>
  );
};

export default Users;

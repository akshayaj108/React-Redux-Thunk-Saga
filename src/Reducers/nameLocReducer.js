import { initData } from "../Utils/initData";
export const reducerOfNameAndLoaction = (state = { initData }, action) => {
  switch (action.type) {
    case "NAME":
      return (state = { ...state, name: action.payload });
    case "LOC":
      return (state = { ...state, loc: action.payload });
    case "USERS":
      return (state = { ...state, usersRecord: action.payload });
    default:
      return state;
  }
};

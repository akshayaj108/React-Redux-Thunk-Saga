import ServiceCall from "../serverCallService/callServer";

const getUsers = () => {
  return (myDispatch, state) => {
    ServiceCall.get("https://fakestoreapi.com/users")
      .then((response) => {
        myDispatch({
          type: "USERS",
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
export default getUsers;

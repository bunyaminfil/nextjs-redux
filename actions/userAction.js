import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

export function getUsers() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
}

export const getUser = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

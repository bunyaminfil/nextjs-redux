import { GET_USERS, GET_USER } from "../actions/userAction";

const initialState = {
  users: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

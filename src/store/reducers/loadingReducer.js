import { TOGGLE_LOADING } from "../types";

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOADING:
      return payload;
    default:
      return state;
  }
};

export default loadingReducer;

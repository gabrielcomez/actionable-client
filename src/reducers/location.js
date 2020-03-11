import { LOCATION_QUERY } from "../actions/location";

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOCATION_QUERY:
      return action.payload;
    default:
      return state;
  }
};

import { SHOW_ONE_EVENT } from "../actions/events";

export default (state = [], action = {}) => {
  switch (action.type) {
    case SHOW_ONE_EVENT:
      return action.payload;
    default:
      return state;
  }
};

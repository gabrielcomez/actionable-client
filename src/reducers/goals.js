import { GOAL_ADD } from "../actions/goals";

const initialState = { isAdded: false, token: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GOAL_ADD:
      console.log(">>>goal adding action payload", action.payload);
      return { ...state, isAdded: true };

    default:
      return state;
  }
};

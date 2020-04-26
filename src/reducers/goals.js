import { GOAL_ADD, GOAL_DEL } from "../actions/goals";

const initialState = { isAdded: false, token: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GOAL_ADD:
      console.log(">>>goal adding action payload", action.payload);
      return { ...state, isAdded: true, goal: action.payload };
    case GOAL_DEL:
      console.log(">>>goal deleting action payload", action.payload);
      return { ...state, isAdded: false };

    default:
      return state;
  }
};

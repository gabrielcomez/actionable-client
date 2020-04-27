import { GOAL_ADD, GOAL_DEL, EVENT_GOAL } from "../actions/goals";

const initialState = { isAdded: false, token: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GOAL_ADD:
      console.log(">>>goal adding action payload", action.payload);
      return { ...state, isAdded: true, goal: action.payload };
    case GOAL_DEL:
      console.log(">>>goal deleting action payload", action.payload);
      return { ...state, isAdded: false };
    case EVENT_GOAL:
      console.log(">>> action.payload @event_goal action", action.payload);
      if (action.payload === "") {
        return { isAdded: false };
      }
      return { isAdded: true, goal: action.payload };
    default:
      return state;
  }
};

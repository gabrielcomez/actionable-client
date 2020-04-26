import { SIGN_UP, SIGN_IN, USER_GOALS } from "../actions/users";

const initialState = { isSignUp: false, token: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      console.log(">>>sign up action payload", action.payload);
      return { ...state, isSignUp: true };
    case SIGN_IN:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        name: action.payload.name,
      };
    case USER_GOALS:
      console.log(">>>user goals action payload", action.payload);
      return { ...state, goals: action.payload };

    default:
      return state;
  }
};

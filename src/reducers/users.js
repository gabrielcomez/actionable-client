import { SIGN_UP, SIGN_IN } from "../actions/users";

const initialState = { isSignUp: false, token: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, isSignUp: true };
    case SIGN_IN:
      console.log(">>>sign in action payload", action.payload);
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

import axios from "axios";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

function signupDone() {
  return { type: SIGN_UP };
}

export function signup(name, email, password) {
  return async function (dispatch, getState) {
    const response = await axios.post(`${dbUrl}/user`, {
      name: name,
      email: email,
      password: password,
    });
    if (response.status === 201) {
      dispatch(signupDone());
    }
  };
}

function signinDone(token, name) {
  return { type: SIGN_IN, payload: { token, name } };
}

export function signin(email, password) {
  return async function (dispatch, getState) {
    console.log("signin action email & password:", email, password);

    const response = await axios.post(`${dbUrl}/signin`, {
      email: email,
      password: password,
    });
    console.log("signin action response:", response);

    dispatch(signinDone(response.data.token, response.data.name));
  };
}

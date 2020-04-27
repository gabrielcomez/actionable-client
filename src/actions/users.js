import axios from "axios";

export const SIGN_UP = "SIGN_UP";

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

export const SIGN_IN = "SIGN_IN";

function signinDone(id, token, name) {
  return { type: SIGN_IN, payload: { id, token, name } };
}

export function signin(email, password) {
  return async function (dispatch, getState) {
    const response = await axios.post(`${dbUrl}/signin`, {
      email: email,
      password: password,
    });
    dispatch(
      signinDone(response.data.id, response.data.token, response.data.name)
    );
  };
}

export const USER_GOALS = "USER_GOALS";

function userGoalsSuccess(goals) {
  return {
    type: USER_GOALS,
    payload: goals,
  };
}

export function userGoals(eventId) {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const response = await axios({
      method: "GET",
      url: `${dbUrl}/goal`,
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(">>>getState @userGoals action", getState().user.id);

    console.log(">>>response.data @userGoals action)", response.data);
    dispatch(userGoalsSuccess(response.data));
  };
}

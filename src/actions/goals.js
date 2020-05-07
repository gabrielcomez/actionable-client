import axios from "axios";

const dbUrl =
  process.DATABASE_URL || "https://getactionable-server.herokuapp.com";

export const GOAL_ADD = "GOAL_ADD";

function addingGoalSuccess(goal, token) {
  return {
    type: GOAL_ADD,
    payload: goal,
  };
}

export function addingGoal(userId, name, city, date, eventId) {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const response = await axios({
      method: "POST",
      url: `${dbUrl}/goal/${eventId}`,
      headers: { authorization: `Bearer ${token}` },
      data: { userId, name, city, date, eventId },
    });
    console.log(">>>response.data @addingGoal action)", response.data);
    dispatch(addingGoalSuccess(response.data));
  };
}

export const GOAL_DEL = "GOAL_DEL";

function deletingGoalSuccess(goal) {
  return {
    type: GOAL_DEL,
    payload: goal,
  };
}

export function deletingGoal(eventId) {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const response = await axios({
      method: "DELETE",
      url: `${dbUrl}/goal/${eventId}`,
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(">>>response.data @deletingGoal action)", response.data);
    dispatch(deletingGoalSuccess(response.data));
  };
}

export const EVENT_GOAL = "EVENT_GOAL";

function thisGoalSuccess(goal) {
  return {
    type: EVENT_GOAL,
    payload: goal,
  };
}

export function thisGoal(eventId) {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const response = await axios({
      method: "GET",
      url: `${dbUrl}/goal/${eventId}`,
      headers: { authorization: `Bearer ${token}` },
    });
    // console.log(">>>getState @userGoals action", getState().user.id);

    console.log(">>>response.data @thisGoal action", response.data);
    dispatch(thisGoalSuccess(response.data));
  };
}

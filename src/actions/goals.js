import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

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

export function deletingGoal() {
  return async function (dispatch, getState) {
    const token = getState().user.token;

    const response = await axios({
      method: "DELETE",
      url: `${dbUrl}/goal`,
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(">>>response.data @addingGoal action)", response.data);
    dispatch(deletingGoalSuccess(response.data));
  };
}

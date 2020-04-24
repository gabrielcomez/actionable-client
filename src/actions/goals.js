import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const GOAL_ADD = "GOAL_ADD";

function addingGoalSuccess(goal) {
  return {
    type: GOAL_ADD,
    payload: goal,
  };
}

export function addingGoal(userId, name, date, eventId) {
  return async function (dispatch, getState) {
    const token = getState().user.token;

    const response = await axios({
      method: "POST",
      url: `${dbUrl}/goal`,
      headers: { authorization: `Bearer ${token}` },
      data: { userId, name, date, eventId },
    });
    console.log(">>>response.data @addingGoal action)", response.data);
    dispatch(addingGoalSuccess(response.data));
  };
}

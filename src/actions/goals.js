import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const GOAL_ADD = "GOAL_ADD";
export const GOAL_DEL = "GOAL_DEL";

function addingGoalSuccess(goal) {
  return {
    type: GOAL_ADD,
    payload: goal,
  };
}

export function addingGoal(userId, name, date) {
  return async function (dispatch, getState) {
    const token = getState().user.token;

    const response = await axios({
      method: "POST",
      url: `${dbUrl}/goal`,
      headers: { authorization: `Bearer ${token}` },
      data: { userId, name, date },
    });
    console.log(">>>response.data @addingGoal action)", response.data);
    dispatch(addingGoalSuccess(response.data));
  };
}

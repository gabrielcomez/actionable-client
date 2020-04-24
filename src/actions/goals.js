import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const GOAL_ADD = "GOAL_ADD";

function addingGoalSuccess(goal) {
  return {
    type: GOAL_ADD,
    payload: goal,
  };
}

const addingGoal = (userId, name, date) => {
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
};

export default addingGoal;

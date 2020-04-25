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
    console.log(">>>ADDING GOAL GETSTATE @addingGoal action", getState().goal);

    // console.log(">>>response.data @addingGoal action)", response.data);
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
      url: `${dbUrl}/goal/:${eventId}`,
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(">>>response.data @addingGoal action)", response.data);
    dispatch(deletingGoalSuccess(response.data));
  };
}

// export const USER_GOALS = "USER_GOALS";

// function userGoalsSuccess(goals) {
//   return {
//     type: USER_GOALS,
//     payload: goals,
//   };
// }

// export const userGoals = (id) => (dispatch, getState) => {
//   if (getState().tickets.length !== 0) return;
//   console.log(">>>getState() @tickets actions", getState());
//   axios(`${dbUrl}/events/${id}/tickets`)
//     .then((response) => {
//       console.log(">>>response.data @showEvents action)", response.data);
//       dispatch(userGoalsSuccess(response.data));
//     })
//     .catch(console.error);
// };

import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const SHOW_ONE_EVENT = "SHOW_ONE_EVENT";

function showOneEventSuccess(event) {
  return {
    type: SHOW_ONE_EVENT,
    payload: { event }
  };
}

export const showOneEvent = (location, id) => (dispatch, getState) => {
  axios(`${dbUrl}/events/${location}/${id}`)
    .then(response => {
      console.log("response.data.category @category action", response);
      dispatch(showOneEventSuccess(response.data));
    })
    .catch(console.error);
};

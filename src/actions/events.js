import axios from "../axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const SHOW_ONE_EVENT = "SHOW_ONE_EVENT";

function showOneEventSuccess(event) {
  return {
    type: SHOW_ONE_EVENT,
    payload: event,
  };
}

export const showOneEvent = (id) => {
  return async function (dispatch, getState) {
    axios(`${dbUrl}/event/${id}`)
      .then((response) => {
        console.log("response.data.category @category action", response);
        dispatch(showOneEventSuccess(response.data));
      })
      .catch(console.error);
  };
};

// export const showOneEvent = id => {
//   return async function(dispatch, getState) {
//     console.log("getState() @category action", getState());
//     const response = await axios(`/event/${id}`);
//     console.log("response.data @category action", response.data);
//     dispatch(showAllCategoriesSuccess(response.data));
//   };
// };

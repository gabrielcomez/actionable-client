import axios from "axios";

const dbUrl =
  process.DATABASE_URL || "https://getactionable-server.herokuapp.com";

export const LOCATION_QUERY = "LOCATION_QUERY";

function queryLocationSuccess(location) {
  return {
    type: LOCATION_QUERY,
    payload: location,
  };
}

export const queryLocation = (location) => (dispatch, getState) => {
  axios(`${dbUrl}/events/${location}`)
    .then((response) => {
      // console.log("response @location action", response);
      dispatch(queryLocationSuccess(response.data));
    })
    .catch(console.error);
};

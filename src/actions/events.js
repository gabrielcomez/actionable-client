import axios from "axios";

const apiKey = "app_key=JgtjrXBpwvHSjN5b";

export const All_CATEGORIES = "All_CATEGORIES";

function showAllCategoriesSuccess(categories) {
  return {
    type: All_CATEGORIES,
    payload: categories
  };
}

export const showAllCategories = () => (dispatch, getState) => {
  axios
    .get(`https://api.eventful.com/json/categories/list?${apiKey}`)
    .then(response => {
      dispatch(showAllCategoriesSuccess(response.data));
      console.log(">>>response.data @showAllCategories action)", response.data);
    })
    .catch(console.error);
};

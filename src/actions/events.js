import axios from "axios";

export const All_CATEGORIES = "All_CATEGORIES";

function showAllCategoriesSuccess(categories) {
  return {
    type: All_CATEGORIES,
    payload: categories
  };
}

export const showAllCategories = () => (dispatch, getState) => {
  axios.get("https://api.eventful.com/json/categories/list").then(response => {
    console.log(response);
  });
};

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
    .get(`http://localhost:4000/category`)

    // .get(`https://api.eventful.com/json/categories/list?${apiKey}`) // categories
    .then(response => {
      console.log("____________________________________response", response);

      dispatch(showAllCategoriesSuccess(response.data));
      console.log(
        ">>>response.data @showAllCategories action)",
        response.category
      );
    })
    .catch(console.error);
};

import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const All_CATEGORIES = "All_CATEGORIES";

function showAllCategoriesSuccess(category) {
  return {
    type: All_CATEGORIES,
    payload: category
  };
}

export const showAllCategories = () => {
  return async function(dispatch, getState) {
    console.log("getState() @category action", getState());
    const response = await axios(`${dbUrl}/category`);
    console.log("response.data.category @category action", response.data);
    dispatch(showAllCategoriesSuccess(response.data.category));
    // .catch(console.error);
  };
};

// export const showAllCategories = () => (dispatch, getState) => {
//   console.log("getState() @category action", getState());
//   axios(`${dbUrl}/category`)
//     .then(response => {
//       console.log("response.data.category @category action", response.data);
//       dispatch(showAllCategoriesSuccess(response.data.category));
//     })
//     .catch(console.error);
// };

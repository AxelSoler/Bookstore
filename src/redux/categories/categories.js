const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoriesArray = [];

const categoriesReducer = (state = categoriesArray, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkingStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;

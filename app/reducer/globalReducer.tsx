import { SET_PRODUCT_ID, SET_CURRENT_PAGE, SET_CATEGORY } from "../actions";

const reducer = (state: any, action: any) => {
  switch (action.type) {
     case SET_PRODUCT_ID:
          return { ...state, productId: action.payload};
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      throw new Error(`No matching action type ${action.type}`);
  }
};

export default reducer;

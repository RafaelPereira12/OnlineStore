import { 
  SET_CART,
  SET_CATEGORY, 
  SET_CURRENT_PAGE,
  SET_ORDER, 
  SET_PRODUCT_ID, 
  SET_SORT_BY,
} from "../actions";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload ?? [] };

    case SET_CATEGORY:
      return { ...state, category: action.payload };
    
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    
    case SET_ORDER:
      return { ...state, order: action.payload};
      
    case SET_PRODUCT_ID:
      return { ...state, productId: action.payload};

    case SET_SORT_BY:
      return { ...state, sortBy: action.payload};
        
    default:
      throw new Error(`No matching action type ${action.type}`);
  }
};

export default reducer;

import { 
  SET_CART,
  SET_CATEGORY, 
  SET_CURRENT_PAGE, 
  SET_ORDER,
  SET_PRODUCT_ID, 
  SET_SORT_BY,
} from "../actions";
import React, { useCallback, useContext, useReducer } from "react";
import reducer from "../reducer/globalReducer";


const initialState = {
  cart: [],
  category: "",
  currentPage: 1,
  order: "",
  productId: 0,
  sortBy: "",
};

type Product = {
  id: number;
  title: string;
  price: number;
  quantity?: number; 
};

const GlobalContext = React.createContext<{
  cart: Product[],
  category: string;
  currentPage: number;
  order : string;
  productId: number;
  sortBy: string;
  setCart: Function;
  setCategory: Function;
  setCurrentPage: Function;
  setOrder: Function;
  setProductId: Function;
  setSortBy: Function;
}>({
  cart: [],
  category: "",
  currentPage: 1,
  order: "", 
  productId: 0,
  sortBy: "",
  setCart: () => {},
  setCategory: () => {},
  setProductId: () => {},
  setCurrentPage: () => {},
  setOrder: () => {},
  setSortBy: () => {},
});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

   const setCart = useCallback((cart : Array<any>) => {
    dispatch({type: SET_CART, payload: cart})
  }, []);

  const setCategory = useCallback((category : string) => {
    dispatch({type: SET_CATEGORY, payload: category})
  }, []);
  
  const setCurrentPage = useCallback((currentPage : number) => {
    dispatch({type: SET_CURRENT_PAGE, payload: currentPage})
  }, []);
  
  const setProductId = useCallback((productId : number) => {
   dispatch({type: SET_PRODUCT_ID, payload: productId})
  }, []);

   const setOrder = useCallback((order : string) => {
   dispatch({type: SET_ORDER, payload: order})
  }, []);

    const setSortBy = useCallback((sortBy : string) => {
   dispatch({type: SET_SORT_BY, payload: sortBy})
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setCart,
        setCategory,
        setCurrentPage,
        setProductId,
        setOrder,
        setSortBy,  
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

import { 
  SET_CATEGORY, 
  SET_CURRENT_PAGE, 
  SET_PRODUCT_ID, 
} from "../actions";
import React, { useCallback, useContext, useReducer } from "react";
import reducer from "../reducer/globalReducer";


const initialState = {
  category: "",
  currentPage: 1,
  order: "asc",
  productId: 0,
  sortBy: "title",
};

const GlobalContext = React.createContext<{
  category: string;
  currentPage: number;
  order : string;
  productId: number;
  sortBy: string;
  setCategory: Function;
  setCurrentPage: Function;
  setOrder: Function;
  setProductId: Function;
  setSortBy: Function;
}>({
  category: "",
  currentPage: 1,
  order: "asc", 
  productId: 0,
  sortBy: "title",
  setCategory: () => {},
  setProductId: () => {},
  setCurrentPage: () => {},
  setOrder: () => {},
  setSortBy: () => {},
});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

   const setProductId = useCallback((productId : number) => {
    dispatch({type: SET_PRODUCT_ID, payload: productId})
  }, []);

  const setCurrentPage = useCallback((currentPage : number) => {
    dispatch({type: SET_CURRENT_PAGE, payload: currentPage})
  }, []);

  const setCategory = useCallback((category : string) => {
    dispatch({type: SET_CATEGORY, payload: category})
  }, []);


  return (
    <GlobalContext.Provider
      value={{
        ...state,
         setProductId,
         setCurrentPage,
         setCategory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

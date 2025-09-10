import { SET_SLIDE, SET_SEASON_DETAILS, SET_VIEW_EPISODES } from "../actions";
import React, { useCallback, useContext, useReducer } from "react";
import reducer from "../reducer/globalReducer";

const initialState = {
  seasonDetails: {
    number: 0,
    id: 0,
  },
  currentSlide: 0,
  viewEpisodes: false,
};

const GlobalContext = React.createContext<{
  // setNextSlide: Function;
  // setPreviousSlide: Function;
  // setSeasonDetails: Function;
  // currentSlide: number;
  // viewEpisodes: false;
  // setViewEpisodes: Function;
}>({
  // setNextSlide: () => {},
  // setPreviousSlide: () => {},
  // setSeasonDetails: () => {},
 
  // currentSlide: 0,
  // viewEpisodes: false,
  // setViewEpisodes: () => {},
});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const setSeasonDetails = useCallback((seasonDetails: Season[]) => {
  //   dispatch({ type: SET_SEASON_DETAILS, payload: seasonDetails });
  // }, []);

  // const setPreviousSlide = useCallback((currentSlide: number) => {
  //   dispatch({ type: SET_SLIDE, payload: currentSlide });
  // }, []);

  // const setNextSlide = useCallback((currentSlide: number) => {
  //   dispatch({ type: SET_SLIDE, payload: currentSlide });
  // }, []);

  // const setViewEpisodes = useCallback((viewEpisodes: boolean) => {
  //   dispatch({ type: SET_VIEW_EPISODES, payload: viewEpisodes });
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        // setNextSlide,
        // setPreviousSlide,
        // setSeasonDetails,
        // setViewEpisodes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

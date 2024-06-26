import React, { createContext, useReduce, useContext, useReducer } from "react";

const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);

import React, { createContext } from "react";

import data from "../components/Data";

const initialState = {
  data: data,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

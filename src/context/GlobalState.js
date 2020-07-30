import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initState = {
  transactions: [
   
  ],
};

//Create context
export const GlobalContext = createContext(initState);

//providee component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  //actions

  function deleteTrans(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransacction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTrans, addTransacction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

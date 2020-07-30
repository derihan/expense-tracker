import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  //for calculation
  const amount = transactions.map((trans) => trans.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //end calculation

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;

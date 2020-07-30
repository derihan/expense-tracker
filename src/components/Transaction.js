import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransList from "./TransList";

const Transaction = () => {
  const { transactions } = useContext(GlobalContext);
 

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((items) => (
          <TransList key={items.id} items={items} />
        ))}
      </ul>
    </>
  );
};

export default Transaction;

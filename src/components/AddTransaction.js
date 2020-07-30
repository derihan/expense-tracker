import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);

  const { addTransacction } = useContext(GlobalContext)

  const submited = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000 ),
      text,
      amount: +amount
    }

    addTransacction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={submited} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            type="number"
            id="amount"
            placeholder="0"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExp from "./components/IncomeExp";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExp />
          <Transaction />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

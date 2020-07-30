import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const TransList = ({items}) => {

  const { deleteTrans } = useContext(GlobalContext)

  const sign = items.amount < 0 ? "-": "+" 

  return (
    <li className={items.amount < 0 ? 'minus' : 'plus'}>
      {items.text} <span>{ sign }${Math.abs(items.amount)}</span>
      <button onClick={()=> deleteTrans(items.id)} className="delete-btn">x</button>
    </li>
  );
};

export default TransList;

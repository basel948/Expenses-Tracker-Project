import React from "react";

import ExpenseItem from "./ExpenseItems";
import "./ExpensesList.css";

function ExpensesList(props) {
  // if the array is not empty the variable changes and becomes the array
  if (props.expenses.length === 0)
    return <div className="expenses-list__fallback">No Expenses Yet!</div>;

  return (
    <ul className="expenses-list">
      {props.expenses.map((expns) => (
        <ExpenseItem
          key={expns.id}
          date={expns.date}
          item={expns.item}
          price={expns.price}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;

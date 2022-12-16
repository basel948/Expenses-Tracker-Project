import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import "./NewExpenses.css";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenses(props) {
  const [year, setYear] = useState("2020");

  const choosenYear = (selctedYear) => {
    setYear(selctedYear);
  };

  // here we return a new filtered array with the choosen year
  const filteredExpenses = props.expenses.filter((expns) => {
    return expns.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onGetYear={choosenYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default NewExpenses;

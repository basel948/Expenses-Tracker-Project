import React, { useState } from "react";

import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";
function AddExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (returnedExpenseData) => {
    const expenseData = {
      ...returnedExpenseData,
      id: Math.random().toString(),
    };
    props.onSendFormData(expenseData);
    setShowForm(false);
  };

  const addNewExpenseHandler = () => {
    setShowForm(true);
  };

  const cancelNewExpense = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelNewExpense}
        />
      )}
    </div>
  );
}

export default AddExpense;

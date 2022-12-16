import React, { useState } from "react";
import AddExpense from "./components/AddNewExpenses/AddExpense";

import NewExpenses from "./components/Expenses/NewExpenses";

const TEST_EXPENSES = [
  {
    id: "exp1",
    item: "Phone Purchase",
    price: "699",
    date: new Date(2022, 25, 12),
  },
  {
    id: "exp2",
    item: "Car Purchase",
    price: "1699",
    date: new Date(2021, 10, 10),
  },
  {
    id: "exp3",
    item: "Car Insurance",
    price: "500",
    date: new Date(2021, 15, 10),
  },
  {
    id: "exp4",
    item: "Water Bill",
    price: "150",
    date: new Date(2021, 9, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(TEST_EXPENSES);

  // we recive the data from the form as (formData) , we manipulate the original expenses array and set as it was before and add to is the new formData.
  const receiveChildData = (formData) => {
    setExpenses((prevExpenses) => {
      return [formData, ...prevExpenses];
    });
  };
  return (
    <div>
      <AddExpense onSendFormData={receiveChildData} />
      <NewExpenses expenses={expenses} />
    </div>
  );
}

export default App;

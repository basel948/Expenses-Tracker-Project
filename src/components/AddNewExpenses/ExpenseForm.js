import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  // using more than 1 useState(); :
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  // using 1 useState(); for all states :
  // to set a new value for a state in the object we must spread the object an override the state we want everytime (line 22-25, 29-32, 36-39)

  //   const [userInput, setUserInput] = useState({
  //     item: "",
  //     price: "",
  //     date: "",
  //   });

  const itemChangeHandler = (e) => {
    setItem(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   item: e.target.value,
    // });

    // a better and safer way to update a state when using 1 useState() is bu using a function :
    // if you update more than 1 state atime using a function makes it easier to update the next state with an updated prevState.
    // setUserInput((prevState) => {
    //   return { ...prevState, item: e.target.value };
    // });
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   price: e.target.value,
    // });

    // a better and safer way to update a state when using 1 useState() is bu using a function :
    // if you update more than 1 state atime using a function makes it easier to update the next state with an updated prevState.
    // setUserInput((prevState) => {
    //   return { ...prevState, price: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });

    // a better and safer way to update a state when using 1 useState() is bu using a function :
    // if you update more than 1 state atime using a function makes it easier to update the next state with an updated prevState.
    // setUserInput((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      item: item,
      price: +price,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setItem("");
    setPrice("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item</label>
          <input
            type={"text"}
            placeholder="Enter Item"
            value={item}
            onChange={itemChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type={"number"}
            min="0.01"
            step={"0.01"}
            placeholder="Enter Price"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type={"date"}
            min="2019-01-01"
            max={"2023-01-01"}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

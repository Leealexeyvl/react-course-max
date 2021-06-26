import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [changedTitle, setChangedTitle] = useState("");
  const titleInputHandler = (event) => {
    setChangedTitle(event.target.value);
  };

  const [changedAmount, setChangedAmount] = useState("");
  const amountInputHandler = (event) => {
    setChangedAmount(event.target.value);
  };

  const [changedDate, setChangedDate] = useState("");
  const dateInputHandler = (event) => {
    setChangedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      title: changedTitle,
      date: new Date(changedDate),
      amount: changedAmount,
    };
    setChangedTitle("");
    setChangedAmount("");
    setChangedDate("");

    props.onLoadDataFromExpenseForm(inputData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={changedTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={changedAmount}
            onChange={amountInputHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={changedDate}
            onChange={dateInputHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

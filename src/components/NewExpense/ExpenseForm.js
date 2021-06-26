import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  //   const [changedTitle, setChangedTitle] = useState("");
  //   const titleInputHandler = (event) => {
  //     setChangedTitle(event.target.value);
  //   };
  //   const [changedAmount, setChangedAmount] = useState("");
  //   const amountInputHandler = (event) => {
  //     setChangedAmount(event.target.value);
  //   };
  //   const [changedDate, setChangedDate] = useState("");
  //   const dateInputHandler = (event) => {
  //     setChangedDate(event.target.value);
  //   };
  const [changedInput, setChangedInput] = useState({
    changedTitle: "",
    changedAmount: "",
    changedDate: "",
  });
  const titleInputHandler = (event) => {
    setChangedInput({
      ...changedInput,
      changedTitle: event.target.value,
    });
  };
  const amountInputHandler = (event) => {
    setChangedInput({
      ...changedInput,
      changedAmount: event.target.value,
    });
  };
  const dateInputHandler = (event) => {
    setChangedInput({
      ...changedInput,
      changedDate: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountInputHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
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

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isShowForm, setAddNewExpense] = useState(false);
  const loadData = (dataFromExpenseForm) => {
    const data = {
      ...dataFromExpenseForm,
      id: Math.random().toString(),
    };
    props.onLoadDataFromNewExpense(data);
  };

  const addNewBtnHandler = () => {
    setAddNewExpense(true);
  };

  const showFormHandler = () => {
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isShowForm && (
        <button onClick={addNewBtnHandler}>Add New Expense</button>
      )}
      {isShowForm && (
        <ExpenseForm
          onLoadDataFromExpenseForm={loadData}
          onShowForm={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const loadData = (dataFromExpenseForm) => {
    const data = {
      ...dataFromExpenseForm,
      id: Math.random().toString(),
    };
    props.onLoadDataFromNewExpense(data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onLoadDataFromExpenseForm={loadData} />
    </div>
  );
};

export default NewExpense;

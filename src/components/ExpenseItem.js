import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>25.06.2021</div>
      <div className="expense-item__description">
        <h2>Bread</h2>
        <div className="expense-item__price">40 rub</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

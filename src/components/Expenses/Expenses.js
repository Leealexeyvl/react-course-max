import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilterredYear] = useState("2020");
  const loadDataFilter = (dataFromFilter) => {
    setFilterredYear(dataFromFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onLoadDataFromFilter={loadDataFilter} />
        <ExpenseItem
          title={props.data[0].title}
          date={props.data[0].date}
          amount={props.data[0].amount}
        />
        <ExpenseItem
          title={props.data[1].title}
          date={props.data[1].date}
          amount={props.data[1].amount}
        />
        <ExpenseItem
          title={props.data[2].title}
          date={props.data[2].date}
          amount={props.data[2].amount}
        />
        <ExpenseItem
          title={props.data[3].title}
          date={props.data[3].date}
          amount={props.data[3].amount}
        />
      </Card>
    </div>
  );
}

export default Expenses;

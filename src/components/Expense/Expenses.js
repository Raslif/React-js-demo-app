import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');
    let listOfExpenses = props.expensesList;

    let yearFilterChangeHandler = (selectedData) => {
        setSelectedYear(selectedData);
        console.log(selectedData);
    }

    return (
        <div className="expenses">
            <ExpensesFilter selected={selectedYear} onChangeYearFilter={yearFilterChangeHandler} />
            {listOfExpenses.map((expense) => (
                <ExpenseItem expenseItem={expense} key={expense.id} />
            ))}
        </div>
    );
}
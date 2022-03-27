import { useState } from "react";

import ExpenseList from "./ExpenseList";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
    const [filteredYear, setSelectedYear] = useState('2020');

    let yearFilterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    let filteredExpensesList = props.expensesList.filter(item => {
        return item.expenseDate.getFullYear().toString() === filteredYear
    });

    // let expensesContent = (!filteredExpensesList || filteredExpensesList.length <= 0)
    //     ? <p>No Expenses found.</p>
    //     : (filteredExpensesList.map((expense, index) => (
    //         <ExpenseItem expenseItem={expense} key={index} />
    //     )));

    //let expensesContent = <p>No Expenses found.</p>;
    // if (filteredExpensesList && filteredExpensesList.length > 0) {
    //     expensesContent = filteredExpensesList.map((expense, index) => (
    //         <ExpenseItem expenseItem={expense} key={index} />
    //     ));
    // }

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeYearFilter={yearFilterChangeHandler} />
            <ExpensesChart expenses={filteredExpensesList}/>
            <ExpenseList filteredList={filteredExpensesList} />
        </div>
    );
}
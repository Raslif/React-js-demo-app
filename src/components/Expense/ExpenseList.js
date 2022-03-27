import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpenseList = (props) => {
    let filteredExpenseList = props.filteredList;

    if (!filteredExpenseList || filteredExpenseList.length === 0)
        return <h3 className="expenses-list__fallback">No Expenses Found.</h3>

    return (
        <ul className="expenses-list">
            {filteredExpenseList.map((expense, index) => (
                <ExpenseItem expenseItem={expense} key={index} />
            ))}
        </ul>
    );
}

export default ExpenseList;
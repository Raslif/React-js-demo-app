import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    let saveExpenseDataHandler = (expenseData) => {
        console.log('From NewExpense.s');
        console.log(expenseData);

        props.onAddExpenseData(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
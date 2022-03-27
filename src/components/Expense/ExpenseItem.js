import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={props.expenseItem.expenseDate}></ExpenseDate>
            <ExpenseDescription className='expense-item__description'>
                <h2>{props.expenseItem.expenseTitle}</h2>
                <div className='expense-item__price'>AED {props.expenseItem.expenseAmount}</div>
            </ExpenseDescription>
        </div>
    );
}
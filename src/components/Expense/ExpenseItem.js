import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseItem.expenseTitle);
    
    let clickHandler = () => {
        setTitle("Title updated");
        console.log(title);
    }

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={props.expenseItem.expenseDate}></ExpenseDate>
            <ExpenseDescription className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>AED {props.expenseItem.expenseAmount}</div>
            </ExpenseDescription>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    );
}
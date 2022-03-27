import React, { useState } from 'react';

import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [listOfExpenses, setExpenseToExpensesList] = useState([
    { expenseDate: new Date(2020, 2, 24), expenseTitle: 'Car Insurance', expenseAmount: '10.00' }
  ]);

  let addExpenseHandler = (expenseData) => {
    let expense = {
      expenseTitle: expenseData.title,
      expenseAmount: expenseData.amount,
      expenseDate: expenseData.date
    };

    setExpenseToExpensesList((previousExpenses) => {
      let newlistOfExpenses = [expense, ...previousExpenses];
      return newlistOfExpenses;
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses expensesList={listOfExpenses} />
    </div>
  );
}

export default App;

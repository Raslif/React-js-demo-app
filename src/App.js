import React from 'react';
import Expenses from './components/Expense/Expenses';

const App = () => {
  let listOfExpenses = [
    { id: 1, expenseDate: new Date(2022, 2, 24), expenseTitle: 'Car Insurance', expenseAmount: '80.00' },
    { id: 2, expenseDate: new Date(2022, 2, 25), expenseTitle: 'Company Insurance', expenseAmount: '100.00' }
  ];

  return (
    <div>
      {listOfExpenses.map((expense) => (
        <Expenses
          expense={expense}
          key={expense.id} />
      ))}
    </div>
  );
}

export default App;

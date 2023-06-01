import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expense from "./components/Expenses/Expense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)

  },
  {
    id: 'e2',
    title: 'CarB insurance',
    amount: 291.67,
    date: new Date(2021, 2, 28)

  },
  {
    id: 'e3',
    title: 'CarC insurance',
    amount: 220,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'CarD insurance',
    amount: 270,
    date: new Date(2021, 2, 28)
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <>
      <h1>Vite + React</h1>
    
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </>
  )
}

export default App;

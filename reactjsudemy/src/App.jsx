import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
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
    }
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <ExpenseItem
       title={expenses[0].title}
       amount={expenses[0].amount}
       date={expenses[0].date}
      />
      <ExpenseItem
       title={expenses[1].title}
       amount={expenses[1].amount}
       date={expenses[1].date}
      />
      <ExpenseItem
       title={expenses[2].title}
       amount={expenses[2].amount}
       date={expenses[2].date}
      />
      <ExpenseItem
       title={expenses[3].title}
       amount={expenses[3].amount}
       date={expenses[3].date}
      />
    </>
  )
}

export default App

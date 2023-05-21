import Expense from "./components/Expenses/Expense";
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
      <Expense items={expenses}/>
    </>
  )
}

export default App;

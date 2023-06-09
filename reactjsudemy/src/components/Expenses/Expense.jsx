// import '../style/components/expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expense(props) {
    const [filteredYear, setFilterYear] = useState('2020');
    const filterChangeHandler = selectYear => {
        setFilterYear(selectYear);
    }
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* javascript expression */}
                {props.items.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                ))}
                {/* ExpenseItem is a component with 3 props(custom attribute html) who defined in an array in app.jsx */}
                {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
                />
                <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                />
                <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
                />
                <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
                /> */}
            </Card>
        </div>
        // card is a component who defined in a UI component
    )
}

export default Expense;
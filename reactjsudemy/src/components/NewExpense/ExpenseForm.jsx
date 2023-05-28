import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // document.getElementById('').addEventListener('click', (event) => {

    // })
    // question : how can we get that value ? Which possibilities do we have here ?
    // What do we want to do  with that value ? What's the goal now ? We want to make sure that
    // we store it somewhere so that when later when the form is submitted, we can use that value.
    const titleChangeHandler = (event) => {
        // console.log("toto", event.target.value);
        setEnteredTitle(event.target.value);
    }

    // How can you manage more than one State ? We can have multiple States, multiple States slices
    // or state pieces per component
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandle = (event) => {
        setEnteredDate(event.target.value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>{enteredTitle}</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="nulber" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandle} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;
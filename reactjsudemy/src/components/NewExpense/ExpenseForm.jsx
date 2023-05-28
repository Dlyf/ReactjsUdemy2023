import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // method two: an alternatif to having the three indivual state slices.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // })
    }
    // document.getElementById('').addEventListener('click', (event) => {

    // })
    // question : how can we get that value ? Which possibilities do we have here ?
    // What do we want to do  with that value ? What's the goal now ? We want to make sure that
    // we store it somewhere so that when later when the form is submitted, we can use that value.
    // const titleChangeHandler = (event) => {
    //     // console.log("toto", event.target.value);
    //     setEnteredTitle(event.target.value);
    // }

    // How can you manage more than one State ? We can have multiple States, multiple States slices
    // or state pieces per component
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandle = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        // console.log(expense);
        // two-way binding : for inputs we don't just listen to changes, but we can also pass a new
        // value back into the input. So we can reset or change the input.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="nulber" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandle} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props) {
    // array destructuring : (we import useState from react) a value + a function who change a value to modify, we define in our
    // useState a props.title as initial value.
    const [title, setTitle] = useState(props.title);

    // let title = props.title;
    // ClickHandler is a function who trigger the click event
    const clickHandler = () => {
        // We call here our function of usestate to modify a value
        setTitle("Updated!");

        console.log("Clicked !!!!");
    }
    return (
        <Card className="expense-item">
            {/* self-closing element */}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* we call the function clickHandler without parenthesis */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
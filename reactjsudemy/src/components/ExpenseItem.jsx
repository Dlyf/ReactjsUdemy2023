import './ExpenseItem.css';
function ExpenseItem() {
    // fake dynamic data
    const expenseDate = new Date(2022, 5, 18);
    const expenseTitle = 'CarInsurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
        )
}

export default ExpenseItem;
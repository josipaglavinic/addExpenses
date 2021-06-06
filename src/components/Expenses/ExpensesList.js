import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>

    }

    return <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}

    </ul>
};

/* if the expenses are 0, then it shows message, else it shows expenses
                {filteredExpenses.length === 0 && <p>No expenses found</p>}
                {filteredExpenses.length > 0  &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )) */
/* )} */

export default ExpensesList;
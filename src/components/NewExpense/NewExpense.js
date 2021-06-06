import React from 'react';
import './NewExpense.css';
import ExpensesForm from './ExpenseForm';


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, // copy in the entered expanse data which is generated in ExpenseForm
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

        // console.log(expenseData);
    };
    // passing the expense data to new expenses with onSaveExpenseData(from child to parent)
    // onSaveExpenseData point on saveExpanseDataHandler
    //onSaveExpenseData is a prop which we are passing to ExpanseForm
    return <div className="new-expense">
        <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;



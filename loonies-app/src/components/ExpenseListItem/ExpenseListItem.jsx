import React from "react";

export default function ExpenseListItem(props) {
    return (
        <div className='listbox-cards'>
            <h5>{props.expense.name} in {props.expense.category}</h5>
            <button onClick={e => props.handleDelete(e, props.expense._id, props.user._id)}> X </button>
            <h5>$ {props.expense.amount} / mo</h5>
        </div>
    )
}
import React from "react";

export default function IncomeListItem(props) {
    return (
        <div className='listbox-cards'>
            <h5>{props.income.name} as {props.income.category}</h5>
            <button onClick={e => props.handleDelete(e, props.income._id, props.income.user)}> X </button>
            <h5>$ {props.income.amount} / mo</h5>
        </div>
    )
}
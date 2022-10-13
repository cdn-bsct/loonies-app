import React from "react";

export default function SaveListItem(props) {
    let timestamp = new Date(props.saving.createdAt)

    return (
    <div className='listbox-cards'>
        <h5>Save deposit - {timestamp.toDateString()}</h5>
        <button onClick={e => props.handleDelete(e, props.saving._id, props.goal)}> X </button>
        <h5>$ {props.saving.amount}</h5>
    </div>
    )
}
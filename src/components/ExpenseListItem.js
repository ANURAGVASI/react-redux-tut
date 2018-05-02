import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenseAction';

const ExpenseListItem = (props) => (
    <div>
        {console.log(Object.keys(props))}
        <h3>{ props.description} </h3>
        <p> {props.amount} - {props.createdAt} </p>
        <button onClick={(e) => {
             props.dispatch(removeExpense({id:props.id}))
        }} >remove</button>
    </div>
);



export default connect()(ExpenseListItem)


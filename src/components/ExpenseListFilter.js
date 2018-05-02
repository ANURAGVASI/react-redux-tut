import React from 'react';
import configStore from '../store/configStore';
import {setTextFilter} from '../actions/filtersAction';
import {connect} from 'react-redux';


const ExpenseListFilter= (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value))
        }} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)


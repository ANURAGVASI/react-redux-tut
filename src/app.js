import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';
import {addExpense} from './actions/expenseAction';
import {setTextFilter} from './actions/filtersAction';
import { setTimeout } from 'timers';

const store = configStore();

store.dispatch(addExpense({description:'House rent',note:'this is a note',amount:100, createdAt: 20}));
store.dispatch(addExpense({description:'vehicle Rent',note:'this is a note 2',amount:50, createdAt: 0}));
store.dispatch(addExpense({description:'Cofee',note:'for both',amount:20, createdAt: 200}));


store.dispatch(setTextFilter('rent'));


const ReactRedux = (
    <Provider store={store} >
        <AppRouter/>
    </Provider>
)




ReactDOM.render(ReactRedux,document.getElementById("mainContainer"));
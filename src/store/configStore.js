
// importing redux store
import {createStore,combineReducers} from 'redux';
// importing reducers
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filtersReducer';

export default () => {

    /****** Creating Store ******/
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    }))

    return store;
}



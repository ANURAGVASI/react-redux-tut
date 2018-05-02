import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

/****** action generators *******/

// ADD_EXPENSE
const addExpense = ({description ='' ,note = '',amount= 0, createdAt = 0} = {}) => ({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SET_START_DATE
const setStartDate = (startDate= undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate= undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

/***** reducers *****/

// expense Reducer

const expenseReducerDefaultState = []; 

const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
          return  [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id!==action.id
            });
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            });

        default : 
            return state;
    }
}

//filter reducer
//default values, text : '', sort : 'date', startDate : undefined, endDate : undefined 

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){

        case 'SET_TEXT_FILTER':
                return {
                    ...state,
                    text:action.text
                }            
        
        case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'
                }

        case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'
                }
        
        case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.startDate
                }

        case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate
                }
        default:
            return state;
    }
}

// get all Expenses based on filters

const getVisibleExpenses = (expenses,{ text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateFilter = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateFilter = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textFilter = expense.description.toLowerCase().includes(text.toLowerCase());

        console.log(startDateFilter,endDateFilter,textFilter);

        return startDateFilter && endDateFilter && textFilter;
    })
    .sort((a,b) => {
        if(sortBy === 'date')
            return a.createdAt -b.createdAt
        
        else if(sortBy === 'amount')
            return a.amount - b.amount        
        
    })
}


/****** Creating Store ******/
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}))

/**** Subscribing to note/log any changes  ****/
store.subscribe(() => {
    const state = store.getState();
    const filtereEexpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(filtereEexpenses);
})

/**** Dispatching Actions ****/

// AddExpense actions
const ex1 = store.dispatch(addExpense({description:'b rent',note:'this is a note',amount:100, createdAt: -200}));
const ex2 = store.dispatch(addExpense({description:'a rent 2',note:'this is a note 2',amount:50, createdAt: 0}));
store.dispatch(addExpense({description:'cofee',note:'this is a coffee',amount:300, createdAt: 100000}));

// // Remove expense action
// store.dispatch(removeExpense({id: ex1.expense.id}));

// // Edit expense actions
// store.dispatch(editExpense(ex2.expense.id,{amount:300}));

// // set text filter action
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

// sort By Actions 
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// set start end date actions
// store.dispatch(setStartDate(90));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(121));
// store.dispatch(setEndDate(13000));
// store.dispatch(setEndDate());


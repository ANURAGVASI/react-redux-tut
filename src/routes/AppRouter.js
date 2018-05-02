import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink  to='/'>Dashboard</NavLink>
        <NavLink  to='/add'>Add Expense</NavLink>
        <NavLink  to='/edit'>Edit Expense</NavLink>
        <NavLink  to='/help'>Need Help</NavLink>
        
    </div>
)

const AppRouter = () => (   

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/add" component={AddExpensePage} />
                {/* <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} /> */}
                {/* <Route component={NotFound} /> */}
            </Switch>
            </div>
    </BrowserRouter>

)

export default AppRouter;
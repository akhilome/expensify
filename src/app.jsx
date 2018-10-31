import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    <p>This is from my dash!</p>
  </div>
);

const AddExpensePage = () => (
  <div>
    <p>This is from my Create Expense page!</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <p>This is from my Edit Expense page!</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>This is from my Help page!</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <p>404 - <Link to='/'>Go home</Link></p>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <p><NavLink activeClassName='is-active' to='/' exact>Dashboard</NavLink></p>
    <p><NavLink activeClassName='is-active' to='/create'>Create Expense</NavLink></p>
    <p><NavLink activeClassName='is-active' to='/edit'>Edit Expense</NavLink></p>
    <p><NavLink activeClassName='is-active' to='/help'>Help</NavLink></p>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={ExpenseDashboardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'dfghjkdfdefcd',
    description: 'January Rent',
    note: 'This was my final payment for that address',
    amount: 333900,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

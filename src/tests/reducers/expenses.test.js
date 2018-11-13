import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(3);
});

test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-120' }
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(4);
});

test('should add an expense', () => {
  const expense = {
    id: '12',
    description: 'cost of testing',
    amount: -30000,
    note: 'turns out, testing is actually beneficial for understanding and code confidence',
    createdAt: 23232
  };
  const action = { type: 'ADD_EXPENSE', expense };

  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length + 1);
  expect(state[state.length - 1]).toEqual(expense);
});

test('should edit an expense', () => {
  const newEdits = {
    description: 'new edit',
    amount: 0
  };
  const action = { type: 'EDIT_EXPENSE', id: expenses[2].id, updates: newEdits };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(newEdits.description);
});

test('should not edit an expense if expense not found', () => {
  const newEdits = {
    description: 'new edit',
    amount: 0
  };
  const action = { type: 'EDIT_EXPENSE', id: '120', updates: newEdits };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

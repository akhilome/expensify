import { createStore } from 'redux';

// Action Generators 
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
  // -> Reducers are pure functions
  // -> Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Actions

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(incrementCount({ incrementBy: 999 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 2000 }));

store.dispatch(setCount({ count: 20000 }));

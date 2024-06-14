const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  } // for increment, update counter

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state; // otherwise, unchanged state
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' }); //becomes 0 after increment and decrement

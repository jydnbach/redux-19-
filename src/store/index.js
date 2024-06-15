import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

////////////////without redux toolkit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter, // if you don't set it, redux will also not output it due to override
//       // don't just update and return state only => why? don't mutate state. always override it.
//       // due to reference types
//     };
//   }

//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//create redux store
// const store = createStore(counterReducer); //point at reducer
/////////////////////////////

const store = configureStore({
  // configureStore: allows merging reducers
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

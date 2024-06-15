import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //allowed to mutate
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload; // need payload (extra data)
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true; //safe to mutate thanks to redux
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions; //no identifiers needed
export const authActions = authSlice.actions;

export default store;

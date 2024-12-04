import { createSlice } from '@reduxjs/toolkit';

// Create a slice of state
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,  // initial value of the counter
  },
  reducers: {
    increment: (state) => {
      state.value += 1;  // Increment the value by 1
    },
    decrement: (state) => {
      state.value -= 1;  // Decrement the value by 1
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions so they can be dispatched
export const { increment, decrement,reset } = counterSlice.actions;

// Export the reducer to be included in the store
export const counterReducer=counterSlice.reducer;
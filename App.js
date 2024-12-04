import React from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Import hooks
import { increment,decrement,reset } from './components/slice';  // Import actions
import './App.css';
const Counter = () => {
  const dispatch = useDispatch();  // Hook to dispatch actions
  const counterValue = useSelector((state) => state.counter.value);  // Access counter value from the store

  return (
    <div >
      <h1>Redux Counter App: {counterValue}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button><p></p>
      <button onClick={() => dispatch(decrement())}>Decrement</button><p></p>
      <button onClick={() => dispatch(reset())}>Reset</button><p></p>

    </div>
  );
};

export default Counter;
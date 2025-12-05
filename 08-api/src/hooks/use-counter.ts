import { useState } from 'react';

export function useCounter() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue((prev) => prev + 1);
  }

  function decrement() {
    setValue((prev) => prev - 1);
  }

  return {
    value,
    decrement,
    increment,
  };
}

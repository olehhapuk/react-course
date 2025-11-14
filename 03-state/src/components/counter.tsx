import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log('render');

  function decrement() {
    setCount(-1);
  }

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button
        type="button"
        onClick={decrement}
        className="p-2 bg-gray-700 text-white rounded-md"
      >
        -
      </button>
      <span className="inline-block text-center w-12">{count}</span>
      <button
        type="button"
        onClick={increment}
        className="p-2 bg-gray-700 text-white rounded-md"
      >
        +
      </button>
    </div>
  );
}

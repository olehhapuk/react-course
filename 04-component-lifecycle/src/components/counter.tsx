import { useState } from 'react';

interface CounterProps {
  label: string;
  onDelete: () => void;
}

export default function Counter({ label, onDelete }: CounterProps) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="border inline-flex items-center p-4 gap-2">
      <span className="font-bold">{label} - </span>
      <button
        type="button"
        onClick={decrement}
        className="p-2 bg-neutral-500 text-white rounded-md"
      >
        -
      </button>
      <span className="inline-block w-5 text-center">{count}</span>
      <button
        type="button"
        onClick={increment}
        className="p-2 bg-neutral-500 text-white rounded-md"
      >
        +
      </button>

      <button
        type="button"
        className="p-2 bg-red-400 text-red-900 rounded-md"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}

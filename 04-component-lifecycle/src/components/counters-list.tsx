import { faker } from '@faker-js/faker';
import { useState } from 'react';
import Counter from './counter';

export default function CountersList() {
  const [items, setItems] = useState<string[]>([]);

  function addItem() {
    setItems((prev) => [...prev, faker.person.firstName()]);
  }

  function deleteItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="p-4 flex flex-col gap-2 items-start">
      <button
        type="button"
        className="p-2 bg-neutral-500 text-white rounded-md"
        onClick={addItem}
      >
        Add item
      </button>
      {items.map((item, i) => (
        <Counter key={item} label={item} onDelete={() => deleteItem(i)} />
      ))}
    </div>
  );
}

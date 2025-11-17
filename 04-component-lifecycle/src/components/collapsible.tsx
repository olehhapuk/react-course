import { useState } from 'react';
import CollapsibleContent from './collapsible-content';

export default function Collapsible() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <button
        type="button"
        onClick={toggleOpen}
        className="p-2 bg-neutral-500 text-white rounded-md"
      >
        Toggle content
      </button>

      {isOpen && <CollapsibleContent />}
    </div>
  );
}

import { useEffect, useState } from 'react';

export default function CollapsibleContent() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  // useEffect(() => {
  //   console.log('useEffect first render');
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect counter', counter);

  //   return () => {
  //     console.log('useEffect return counter', counter);
  //   };
  // }, [counter]);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      console.log(e.code);
    }

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        {counter}
      </button>
      <input
        type="text"
        onChange={(e) => setText(e.currentTarget.value)}
        value={text}
        className="border"
      />
    </div>
  );
}

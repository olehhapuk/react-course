/* eslint-disable react-refresh/only-export-components */
import { createRoot } from 'react-dom/client';

const rootElem = document.querySelector('#root');

if (!rootElem) {
  throw new Error('#root not found');
}

interface MyElementProps {
  fullName: string;
  age: number;
}

function MyElement(props: MyElementProps) {
  return (
    <div>
      <h1>My name is: {props.fullName}</h1>
      <h2>My age is {props.age}</h2>
    </div>
  );
}

createRoot(rootElem).render(
  <>
    <MyElement fullName="John Doe" age={32} />
    <MyElement fullName="Jane Doe" age={24} />
  </>
);

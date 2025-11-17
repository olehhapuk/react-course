import Collapsible from './collapsible';
import CountersList from './counters-list';
import DialogExample from './dialog-example';

export default function App() {
  return (
    <div className="divide-y">
      <CountersList />
      <Collapsible />
      <DialogExample />
    </div>
  );
}

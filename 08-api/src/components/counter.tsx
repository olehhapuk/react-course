import { Button } from './ui/button';
import { useCounter } from '@/hooks/use-counter';

export default function Counter() {
  const { value, decrement, increment } = useCounter();

  return (
    <div>
      <Button type="button" onClick={decrement}>
        -
      </Button>
      <span>{value}</span>
      <Button type="button" onClick={increment}>
        +
      </Button>
    </div>
  );
}

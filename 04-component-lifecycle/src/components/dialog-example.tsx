import { useCallback, useEffect, useMemo, useState } from 'react';
import Dialog from './dialog';
import { Button } from './ui/button';

export default function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setText('test');
    }, 1000);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const result = useMemo(
    () => `${isOpen ? 'Open' : 'Closed'} - ${text}`,
    [isOpen, text]
  );

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>

      <p>{result}</p>

      {isOpen && <Dialog onClose={handleClose} />}
    </div>
  );
}

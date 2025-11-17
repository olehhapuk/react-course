import { useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface DialogProps {
  onClose: () => void;
}

export default function Dialog({ onClose }: DialogProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 bg-black/30" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-1/2 w-[80dvw] h-[90dvh] bg-neutral-400 rounded-md p-4">
        <p>
          Exercitation Lorem ad nisi mollit mollit cupidatat voluptate laborum
          aute anim aliquip irure. Nisi occaecat fugiat aliqua amet exercitation
          exercitation deserunt nisi exercitation magna. Enim est culpa velit
          minim laboris pariatur aute aliquip sint qui.
        </p>

        <Button
          type="button"
          onClick={onClose}
          variant="ghost"
          size="icon-sm"
          className="rounded-full"
        >
          <X />
        </Button>
      </div>
    </>
  );
}

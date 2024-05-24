// In useDisableCopyPaste.tsx
import { useEffect } from 'react';

interface UseDisableCopyPasteOptions {
  enableOnInputFields?: boolean;
}

const useDisableCopyPaste = (options: UseDisableCopyPasteOptions = {}) => {
  useEffect(() => {
    const handler = (event: ClipboardEvent) => {
      if (options.enableOnInputFields && event.target instanceof HTMLInputElement) {
        return;
      }
      event.preventDefault();
    };

    document.addEventListener('copy', handler);
    document.addEventListener('paste', handler);

    return () => {
      document.removeEventListener('copy', handler);
      document.removeEventListener('paste', handler);
    };
  }, [options.enableOnInputFields]); // Only re-run effect if options.change
};

export default useDisableCopyPaste;

import { useEffect } from 'react';

interface DisableLinkDragOptions {
  enabled?: boolean;
}

function useDisableLinkDrag({ enabled = true }: DisableLinkDragOptions = {}) {
  useEffect(() => {
    if (!enabled) return;

    const preventDrag = (event: DragEvent) => event.preventDefault();
    document.addEventListener('dragstart', preventDrag);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('dragstart', preventDrag);
    };
  }, [enabled]);
}

export default useDisableLinkDrag;

import { RefObject, useEffect } from 'react';

export default function useClickOutside(targetElRef: RefObject<Element>, callback: () => void) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (targetElRef?.current?.contains(event.target as Node)) {
        return;
      }

      callback();
    };

    document.addEventListener('click', onClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [targetElRef, callback]);
}

import { MouseEvent, useEffect, useRef } from 'react';

export const useOutsideClick = (handler: () => void) => {
  const domElement = useRef<HTMLElement | HTMLDivElement | HTMLInputElement>(null);

  useEffect(() => {
    const eventHandle = (event: MouseEvent) => {
      if (!domElement.current!.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', eventHandle as any);

    return () => {
      document.removeEventListener('mousedown', eventHandle as any);
    };
  }, []);

  return domElement;
};

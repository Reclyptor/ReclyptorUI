import { useRef } from 'react';

const useDebounce = (fn: (...args: any) => void, timeout = 500): typeof fn => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  return (...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => fn(...args), timeout);
  };
};

export default useDebounce;

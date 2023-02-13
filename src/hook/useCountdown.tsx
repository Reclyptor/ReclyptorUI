import { useEffect, useRef, useState } from 'react';

const useCountdown = (date?: Date) => {
  const getRemaining = (): number =>
    !date ? 0 : Math.max((date.getTime() || 0) - new Date().getTime(), 0);
  const [remaining, setRemaining] = useState<number>(getRemaining());
  const timer = useRef<ReturnType<typeof setInterval>>();

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  const hour = `${hours}`;
  const minute = `0${minutes}`.slice(-2);
  const second = `0${seconds}`.slice(-2);

  const time = remaining ? `${hour}:${minute}:${second}` : '';

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(timer.current);
  }, [date]);

  return { time, remaining };
};

export default useCountdown;

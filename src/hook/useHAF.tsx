import { useEffect, useState } from 'react';

const useHAF = <T extends HTMLElement>() => {
  const [ref, setRef] = useState<T | null>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (ref) {
      ref.onmouseenter = () => setHover(true);
      ref.onmouseleave = () => setHover(false);
      ref.onmousedown = () => setActive(true);
      ref.onmouseup = () => setActive(false);
      ref.onfocus = () => setFocus(true);
      ref.onblur = () => setFocus(false);
      setWidth(ref.offsetWidth);
    }
  }, [ref]);

  return { ref: setRef, hover, active, focus, width };
};

export default useHAF;

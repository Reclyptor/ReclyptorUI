import { ForwardedRef, MutableRefObject, useEffect, useRef, useState } from "react";

const useHAF = <T extends HTMLElement>(_ref?: ForwardedRef<T>) => {
  const ref = useRef<T>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      if (!!_ref && typeof _ref === 'object') {
        _ref.current = ref.current;
      } else if (typeof _ref === 'function') {
        _ref(ref.current);
      }
      const onMouseEnter = () => setHover(true);
      const onMouseLeave = () => setHover(false);
      const onMouseDown = () => setActive(true);
      const onMouseUp = () => setActive(false);
      const onFocus = () => setFocus(true);
      const onBlur = () => setFocus(false);
      ref.current.addEventListener('mouseenter', onMouseEnter);
      ref.current.addEventListener('mouseleave', onMouseLeave);
      ref.current.addEventListener('mousedown', onMouseDown);
      ref.current.addEventListener('mouseup', onMouseUp);
      ref.current.addEventListener('focus', onFocus);
      ref.current.addEventListener('blur', onBlur);
      setWidth(ref.current.offsetWidth);

      return () => {
        if (ref.current) {
          ref.current.removeEventListener('mouseenter', onMouseEnter);
          ref.current.removeEventListener('mouseleave', onMouseLeave);
          ref.current.removeEventListener('mousedown', onMouseDown);
          ref.current.removeEventListener('mouseup', onMouseUp);
          ref.current.removeEventListener('focus', onFocus);
          ref.current.removeEventListener('blur', onBlur);
          setWidth(0);
        }
      }
    }
  }, [ref.current]);

  return { ref, hover, active, focus, width };
};

export default useHAF;

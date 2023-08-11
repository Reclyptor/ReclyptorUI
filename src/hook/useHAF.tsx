import { ForwardedRef, useEffect, useMemo, useRef, useState } from "react";

export type State = 'default' | 'hover' | 'active' | 'focus';

const useHAF = <T extends HTMLElement>(_ref?: ForwardedRef<T>) => {
  const ref = useRef<T>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const state = useMemo<State>(() => {
    if (active) {
      return 'active';
    } else if (hover) {
      return 'hover';
    } else if (focus) {
      return 'focus';
    } else {
      return 'default';
    }
  }, [hover, active, focus]);

  useEffect(() => {
    if (ref.current) {
      if (!!_ref && typeof _ref === 'object') {
        _ref.current = ref.current;
      } else if (typeof _ref === 'function') {
        _ref(ref.current);
      }
      const onMouseOver = () => setHover(true);
      const onMouseOut = () => { setHover(false); setActive(false); };
      const onMouseDown = () => setActive(true);
      const onMouseUp = () => setActive(false);
      const onFocus = () => setFocus(true);
      const onBlur = () => setFocus(false);
      ref.current.addEventListener('mouseover', onMouseOver);
      ref.current.addEventListener('mouseout', onMouseOut);
      ref.current.addEventListener('mousedown', onMouseDown);
      ref.current.addEventListener('mouseup', onMouseUp);
      ref.current.addEventListener('focus', onFocus);
      ref.current.addEventListener('blur', onBlur);

      return () => {
        if (ref.current) {
          ref.current.removeEventListener('mouseover', onMouseOver);
          ref.current.removeEventListener('mouseout', onMouseOut);
          ref.current.removeEventListener('mousedown', onMouseDown);
          ref.current.removeEventListener('mouseup', onMouseUp);
          ref.current.removeEventListener('focus', onFocus);
          ref.current.removeEventListener('blur', onBlur);
        }
      }
    }
  }, [ref.current]);

  return { ref, state, hover, active, focus };
};

export default useHAF;

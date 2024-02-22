import { useEffect, useMemo, useState } from "react";
import { sha1 } from "../util/hash";
import { toMap } from "../util/reducer";

export type Option<T> = {
  idx?: number;
  key: string;
  label: string;
  item: T;
};

export type Props<T> = {
  items: T[];
  value?: T[];
  key?: keyof T | ((_: T) => string | number);
  label?: keyof T | ((_: T) => string | number);
};

const useOptions = <T,>(props: Props<T>) => {
  const [_selection, _setSelection] = useState<{ [key: string]: Option<T> }>({});

  const options = useMemo((): Option<T>[] => Object.values(_selection), [_selection]);

  const keyOf = (item: T): string => {
    if (typeof props.key === 'function') {
      return String(props.key(item));
    } else if (props.key && item && typeof item === 'object' && props.key in item) {
      return String(item[props.key]);
    }
    return sha1({ item });
  };

  const labelOf = (item: T): string => {
    if (typeof props.label === 'function') {
      return String(props.label(item));
    } else if (props.label && item && typeof item === 'object' && props.label in item) {
      return String(item[props.label]);
    }
    return String(item);
  };

  const toOption = (item: T, idx?: number): Option<T> => {
    const key = keyOf(item);
    const label = labelOf(item);
    return { idx, key, label, item };
  };

  const select = (option: Option<T> | Option<T>[]): void => {
    _setSelection((current) => {
      const options: Option<T>[] = Array.isArray(option) ? option : [option];
      return { ...current, ...options.reduce(toMap<Option<T>>('key'), {}) };
    });
  };

  const deselect = (option: Option<T> | Option<T>[]): void => {
    _setSelection((current) => {
      const selection = { ...current };
      const options: Option<T>[] = Array.isArray(option) ? option : [option];
      options.forEach((opt: Option<T>) => delete selection[opt.key]);
      return selection;
    });
  };

  const isSelected = (option: Option<T> | Option<T>[]): boolean => {
    const options: Option<T>[] = Array.isArray(option) ? option : [option];
    return options.map((opt: Option<T>) => opt.key in _selection).reduce((x,y) => x && y, true);
  };

  const clear = (): void => {
    _setSelection({});
  };

  useEffect(() => {
    if (props.value && (props.value.length !== options.length || !props.value.map(keyOf).every((key) => key in _selection))) {
      _setSelection({});
      select(props.value.map((item) => toOption(item)));
    }
  }, [props.value]);

  return { options, select, deselect, isSelected, clear };
};

export default useOptions;

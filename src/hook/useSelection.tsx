import React, { useMemo, useState } from 'react';
import { sha1 } from '../util/hash';
import { toMap } from '../util/reducer';

const useSelection = <T,>(_key?: keyof T | ((_: T) => string | number)) => {
  const [_selection, _setSelection] = useState<{ [key: string]: T }>({});

  const selected = useMemo(() => Object.values(_selection), [_selection]);

  const keyOf = (item: T): string => {
    if (typeof _key === 'function') {
      return String(_key(item));
    } else if (_key && item && typeof item === 'object' && _key in item) {
      return String(item[_key]);
    }
    return sha1({ item });
  };

  const select = (item: T | T[]): void => {
    const items = Array.isArray(item) ? item : [item];
    _setSelection({ ..._selection, ...items.reduce(toMap(keyOf), {}) });
  };

  const deselect = (item: T | T[]): void => {
    const selection = { ..._selection };
    const items = Array.isArray(item) ? item : [item];
    items.forEach((t: T) => (delete selection[keyOf(t)]));
    _setSelection(selection);
  };

  const isSelected = (item: T | T[]): boolean => {
    const items = Array.isArray(item) ? item : [item];
    return items.map((t: T) => !!_selection[keyOf(t)]).reduce((x,y) => x && y, true);
  };

  const clear = (): void => {
    _setSelection({});
  };

  return { selected, select, deselect, isSelected, clear };
};

export default useSelection;

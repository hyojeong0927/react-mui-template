import { useState, useEffect, useCallback } from 'react';
import { not, intersection, union } from '@/utils/arrayHelpers';

export function useTransferList(leftData, rightData, onChange) {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(leftData);
  const [right, setRight] = useState(rightData);

  const moveItems = (source, setSource, target, setTarget, items) => {
    setTarget(target.concat(items));
    setSource(source.filter(item => !items.some(i => i.id === item.id)));
    setChecked(checked.filter(item => !items.some(i => i.id === item.id)));
    onChange && onChange({ left, right });
  };

  useEffect(() => {
    setLeft(leftData);
    setRight(rightData);
  }, [leftData, rightData]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const toggle = useCallback(item => {
    setChecked(prev =>
      prev.some(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item],
    );
  }, []);

  const toggleAll = useCallback(items => {
    setChecked(prev =>
      intersection(prev, items).length === items.length
        ? not(prev, items)
        : union(prev, items),
    );
  }, []);

  return {
    left,
    right,
    checked,
    leftChecked,
    rightChecked,
    moveItems,
    toggle,
    toggleAll,
    setLeft,
    setRight,
  };
}

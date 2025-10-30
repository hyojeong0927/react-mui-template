import { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';

export default function CheckboxGroup({
  id = '',
  label = '',
  options = [],
  propValue = [],
  onChange,
  disabled = false,
  color = 'primary',
  size = 'medium',
  includeSelectAll = false,
  row = false,
  error = false,
  helperText = '',
}) {
  const [selected, setSelected] = useState(
    Array.isArray(propValue) ? propValue : [],
  );

  useEffect(() => {
    setSelected(Array.isArray(propValue) ? propValue : []);
  }, [propValue]);

  const handleToggle = value => {
    const newSelected = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value];
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handleSelectAllChange = () => {
    if (selected.length === options.length) {
      setSelected([]);
      onChange?.([]);
    } else {
      const allValues = options.map(o => o.value);
      setSelected(allValues);
      onChange?.(allValues);
    }
  };

  return (
    <FormControl id={id} component="fieldset" error={error} disabled={disabled}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row={row} sx={{ gap: row ? 2 : 0 }}>
        {includeSelectAll && (
          <FormControlLabel
            control={
              <Checkbox
                checked={selected.length === options.length}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
                onChange={handleSelectAllChange}
                color={color}
                size={size}
              />
            }
            label="전체 선택"
          />
        )}
        {options.map(opt => (
          <FormControlLabel
            key={opt.value}
            control={
              <Checkbox
                checked={selected.includes(opt.value)}
                onChange={() => handleToggle(opt.value)}
                color={color}
                size={size}
              />
            }
            label={opt.label}
          />
        ))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

import { useState, useEffect } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@mui/material';

export default function BasicSelect({
  id = '',
  label = '',
  propValue = '',
  onChange,
  options = [],
  required = false,
  disabled = false,
  error = false,
  helperText = '',
}) {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <FormControl
      fullWidth
      required={required}
      disabled={disabled}
      error={error}
    >
      {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
      <Select
        labelId={label ? `${id}-label` : undefined}
        id={id}
        value={value}
        onChange={handleChange}
        displayEmpty
      >
        {options.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

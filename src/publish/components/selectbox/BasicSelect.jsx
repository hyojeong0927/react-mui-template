import { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';

export default function BasicSelect({
  id = '',
  label = '선택',
  options = [],
  propValue = '',
  onChange,
  fullWidth = true,
  disabled = false,
  required = false,
  error = false,
  helperText = '',
}) {
  const [value, setValue] = useState(propValue);
  const labelId = id ? `${id}-label` : undefined;

  const handleChange = event => {
    setValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      error={error}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        slotProps={{
          root: {
            'aria-labelledby': labelId,
          },
        }}
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

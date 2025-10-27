import { useState, useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';

export default function BasicRadioGroup({
  id = '',
  label = '',
  options = [],
  propValue = '',
  onChange,
  disabled = false,
  color = 'primary',
  direction = 'row', // 'row' | 'column'
  error = false,
  helperText = '',
}) {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = event => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <FormControl
      id={id}
      disabled={disabled}
      error={error}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      {label && (
        <FormLabel id={id ? `${id}-label` : undefined}>{label}</FormLabel>
      )}

      <RadioGroup
        row={direction === 'row'}
        value={value}
        onChange={handleChange}
        aria-labelledby={id ? `${id}-label` : undefined}
      >
        {options.map(opt => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio color={color} disabled={opt.disabled} />}
            label={opt.label}
          />
        ))}
      </RadioGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

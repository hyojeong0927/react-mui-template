import { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@mui/material';

export default function BasicRadioGroup({
  id = '',
  label = '',
  options = [],
  propValue = '',
  onChange,
  row = false,
  disabled = false,
  error = false,
  helperText = '',
}) {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = e => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <FormControl id={id} component="fieldset" error={error} disabled={disabled}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup value={value} onChange={handleChange} row={row}>
        {options.map(opt => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio />}
            label={opt.label}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

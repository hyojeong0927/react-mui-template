import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextField({
  id = '',
  label = '입력값',
  type = 'text',
  propValue = '',
  onChange,
  fullWidth = true,
  required = false,
  disabled = false,
  error = false,
  helperText = '',
  placeholder = '',
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
    <TextField
      id={id}
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={handleChange}
      fullWidth={fullWidth}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
    />
  );
}

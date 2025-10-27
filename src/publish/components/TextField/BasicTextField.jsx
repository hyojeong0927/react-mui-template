import { useState } from 'react';
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

  const handleChange = e => {
    setValue(e.target.value);
    if (onChange) onChange(e);
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
      slotProps={{
        input: {
          'aria-labelledby': id ? `${id}-label` : undefined,
        },
      }}
    />
  );
}

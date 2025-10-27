import { Checkbox, FormControlLabel } from '@mui/material';

export default function BasicCheckbox({
  id = '',
  label = '',
  checked = false,
  onChange,
  disabled = false,
  size = 'medium',
  color = 'primary',
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          size={size}
          color={color}
          slotProps={{
            input: id ? { 'aria-labelledby': `${id}-label` } : {},
          }}
        />
      }
      label={label}
      id={id ? `${id}-label` : undefined}
    />
  );
}

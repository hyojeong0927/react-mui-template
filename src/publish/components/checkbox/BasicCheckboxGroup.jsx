import { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';

export default function BasicCheckboxGroup({
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
    let newSelected;
    if (selected.includes(value)) {
      newSelected = selected.filter(v => v !== value);
    } else {
      newSelected = [...selected, value];
    }
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

  const labelId = id ? `${id}-label` : undefined;

  return (
    <FormControl component="fieldset" error={error} disabled={disabled} id={id}>
      {label && (
        <FormLabel component="legend" id={labelId}>
          {label}
        </FormLabel>
      )}

      <FormGroup row={row} sx={{ gap: row ? 2 : 0 }}>
        {includeSelectAll && (
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  options.length > 0 && selected.length === options.length
                }
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
                onChange={handleSelectAllChange}
                disabled={disabled}
                color={color}
                size={size}
                slotProps={{
                  input: {
                    'aria-label': '전체 선택',
                  },
                }}
              />
            }
            label="전체 선택"
          />
        )}

        {options.map(opt => {
          const itemLabelId = id ? `${id}-label-${opt.value}` : undefined;
          return (
            <FormControlLabel
              key={opt.value}
              id={itemLabelId}
              control={
                <Checkbox
                  checked={selected.includes(opt.value)}
                  onChange={() => handleToggle(opt.value)}
                  disabled={disabled}
                  color={color}
                  size={size}
                  slotProps={{
                    input: {
                      'data-value': opt.value,
                      'aria-labelledby': itemLabelId,
                    },
                  }}
                />
              }
              label={opt.label}
            />
          );
        })}
      </FormGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

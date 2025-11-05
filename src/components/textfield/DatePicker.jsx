import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from 'dayjs';

export default function MuiDatePicker({
  label = '날짜 선택',
  value,
  onChange,
  placeholder = '날짜를 선택하세요',
  disabled = false,
  required = false,
  className = '',
  inputRef,
}) {
  const parsedValue = value ? dayjs(value) : null;

  return (
    <DatePicker
      label={label}
      value={parsedValue}
      onChange={newValue => onChange?.(newValue || null)}
      enableAccessibleFieldDOMStructure={false}
      format="YYYY-MM-DD"
      slots={{
        openPickerIcon: CalendarMonthIcon,
      }}
      slotProps={{
        textField: {
          fullWidth: true,
          size: 'small',
          required,
          placeholder,
          className,
          disabled,
          inputRef,
          sx: {
            '& input::placeholder': { color: '#aaa' },
            '& .MuiOutlinedInput-root': {
              background: disabled ? '#f7f7f7' : '#fff',
              '& fieldset': { borderColor: '#d0d0d0' },
              '&:hover fieldset': { borderColor: '#7a7a7a' },
              '&.Mui-focused fieldset': { borderColor: '#1976d2' },
            },
          },
        },
        openPickerButton: {
          disabled,
        },
      }}
    />
  );
}

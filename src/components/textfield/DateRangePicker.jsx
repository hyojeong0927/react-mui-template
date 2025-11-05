// MuiDateRangePicker.jsx
import { Box, Button, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useRef, useState, useEffect } from 'react';
import MuiDatePicker from './DatePicker';

export default function MuiDateRangePicker({
  startLabel = '시작일',
  endLabel = '종료일',
  value,
  defaultValue,
  onChange,
}) {
  const [internalStart, setInternalStart] = useState(
    defaultValue?.[0] || dayjs().startOf('month'),
  );
  const [internalEnd, setInternalEnd] = useState(
    defaultValue?.[1] || dayjs().endOf('month'),
  );

  const isControlled = !!value;
  const startDate = isControlled ? value?.[0] : internalStart;
  const endDate = isControlled ? value?.[1] : internalEnd;

  const endInputRef = useRef(null); // ✅ 자동 포커스 이동 대상

  useEffect(() => {
    if (isControlled && value) {
      setInternalStart(value[0]);
      setInternalEnd(value[1]);
    }
  }, [isControlled, value]);

  const updateRange = (s, e) => {
    if (!isControlled) {
      setInternalStart(s);
      setInternalEnd(e);
    }
    onChange?.([s, e]);
  };

  const handleStart = newStart => {
    if (!newStart) return;
    const adjustedEnd = newStart.isAfter(endDate) ? newStart : endDate;
    updateRange(newStart, adjustedEnd);

    // ✅ 시작일 선택 후 종료일 입력으로 자동 포커스 이동
    setTimeout(() => endInputRef.current?.focus(), 50);
  };

  const handleEnd = newEnd => {
    if (!newEnd) return;
    const adjustedStart = newEnd.isBefore(startDate) ? newEnd : startDate;
    updateRange(adjustedStart, newEnd);
  };

  // ✅ 프리셋 버튼들
  const presets = [
    {
      label: '이번달',
      range: [dayjs().startOf('month'), dayjs().endOf('month')],
    },
    {
      label: '지난달',
      range: [
        dayjs().subtract(1, 'month').startOf('month'),
        dayjs().subtract(1, 'month').endOf('month'),
      ],
    },
    { label: '최근 7일', range: [dayjs().subtract(6, 'day'), dayjs()] },
  ];

  return (
    <Stack spacing={1.5}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <MuiDatePicker
          label={startLabel}
          value={startDate}
          onChange={handleStart}
        />
        <MuiDatePicker
          label={endLabel}
          value={endDate}
          onChange={handleEnd}
          inputRef={endInputRef}
        />
      </Box>

      {/* ✅ 프리셋 버튼 UI */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {presets.map(p => (
          <Button
            key={p.label}
            size="small"
            variant="outlined"
            onClick={() => updateRange(p.range[0], p.range[1])}
          >
            {p.label}
          </Button>
        ))}
      </Box>
    </Stack>
  );
}

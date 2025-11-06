import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Skeleton,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '@/styles/pages/account.scss';

function formatCurrencyKRW(value) {
  if (value == null) return '-';
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0,
  }).format(value);
}

function groupByDate(items) {
  return items.reduce((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {});
}

export default function Transaction({ data = [] }) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    setItems(data || []);
    setLoading(false);
  }, [data]);

  const filtered = useMemo(() => {
    return items.filter(it => {
      if (typeFilter !== 'all' && it.type !== typeFilter) return false;
      if (
        query &&
        !`${it.title}${it.time}${it.date}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [items, typeFilter, query]);

  const grouped = useMemo(() => groupByDate(filtered), [filtered]);

  return (
    <Container className="transaction">
      {/* 검색 & 필터 */}
      <Paper className="transaction__filters">
        <TextField
          size="small"
          placeholder="검색 (거래명/시간)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          InputProps={{ startAdornment: <SearchIcon /> }}
          fullWidth
        />

        <ToggleButtonGroup
          size="small"
          fullWidth
          value={typeFilter}
          exclusive
          onChange={(e, v) => v && setTypeFilter(v)}
        >
          <ToggleButton value="all">전체</ToggleButton>
          <ToggleButton value="deposit">입금</ToggleButton>
          <ToggleButton value="withdraw">출금</ToggleButton>
        </ToggleButtonGroup>
      </Paper>

      {/* 내역 */}
      {loading ? (
        <Skeleton variant="rectangular" height={200} />
      ) : Object.keys(grouped).length === 0 ? (
        <Paper className="transaction__empty">내역이 없습니다.</Paper>
      ) : (
        Object.entries(grouped).map(([date, list]) => (
          <Box key={date} className="transaction__group">
            <Typography className="transaction__date">{date}</Typography>
            <Paper>
              <List disablePadding>
                {list.map((tx, idx) => (
                  <React.Fragment key={idx}>
                    <ListItem
                      className={`transaction__item ${isMobile ? 'mobile' : ''}`}
                    >
                      <ListItemText
                        disableTypography
                        primary={
                          <div className="transaction__row">
                            <span className="transaction__title">
                              {tx.title}
                            </span>
                            <span className={`transaction__amount ${tx.type}`}>
                              {tx.type === 'deposit' ? '+' : '-'}
                              {formatCurrencyKRW(tx.amount)}
                            </span>
                          </div>
                        }
                        secondary={
                          <div className="transaction__row">
                            <span className="transaction__time">{tx.time}</span>
                            <span className="transaction__remain">
                              잔액 {formatCurrencyKRW(tx.balance)}
                            </span>
                          </div>
                        }
                      />
                    </ListItem>
                    {idx < list.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
        ))
      )}
    </Container>
  );
}

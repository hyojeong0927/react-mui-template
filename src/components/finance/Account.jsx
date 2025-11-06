import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Stack,
  Divider,
} from '@mui/material';

export default function Account({
  bankName = '은행명',
  accountNumber = '0000-00-000000',
  totalBalance = '₩0',
  availableBalance = '₩0',
  onTransfer = () => {},
  onManage = () => {},
  layoutType = 'default',
}) {
  const isCompact = layoutType === 'compact';
  const isHorizontal = layoutType === 'horizontal';

  if (isHorizontal) {
    return (
      <Card sx={{ borderRadius: 3, p: 1 }}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                {bankName}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {accountNumber}
              </Typography>
            </Box>

            <Box textAlign="right">
              <Typography variant="caption" color="text.secondary">
                총 금액
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {totalBalance}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                출금 가능: <strong>{availableBalance}</strong>
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button variant="contained" onClick={onTransfer}>
                이체
              </Button>
              <Button variant="outlined" onClick={onManage}>
                관리
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );
  }

  if (isCompact) {
    return (
      <Card sx={{ borderRadius: 3, p: 1 }}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                {bankName}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {accountNumber}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                총 금액
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {totalBalance}
              </Typography>
            </Box>

            <Stack spacing={1} width={120}>
              <Button size="small" variant="contained" onClick={onTransfer}>
                이체
              </Button>
              <Button size="small" variant="outlined" onClick={onManage}>
                관리
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );
  }

  // default
  return (
    <Card sx={{ borderRadius: 3, p: 1 }}>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: 600 }}
            >
              {bankName}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {accountNumber}
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="caption" color="text.secondary">
              총 금액
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
              {totalBalance}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              출금 가능 금액: <strong>{availableBalance}</strong>
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Button fullWidth variant="contained" onClick={onTransfer}>
              이체
            </Button>
            <Button fullWidth variant="outlined" onClick={onManage}>
              계좌 관리
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

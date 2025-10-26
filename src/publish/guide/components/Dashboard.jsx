import { Box, Button, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Box className="dashboard">
      <Typography variant="h5" className="dashboard-title">
        Admin Dashboard
      </Typography>

      <Button variant="contained" className="dashboard-btn">
        저장하기
      </Button>
    </Box>
  );
}

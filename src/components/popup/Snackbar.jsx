import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function BasicSnackbar({
  open = false,
  onClose,
  message = '',
  severity = 'success', // success, error, warning, info
  duration = 3000,
  position = 'bottom', // 'top' or 'bottom'
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{
        vertical: position === 'top' ? 'top' : 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert
        severity={severity}
        onClose={onClose}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

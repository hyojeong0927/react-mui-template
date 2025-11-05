import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function BasicSnackbar({
  open,
  handleClose,
  duration = '3000',
  children,
  severity = 'success',
}) {
  return (
    <>
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} variant="filled">
          {children}
        </Alert>
      </Snackbar>
    </>
  );
}

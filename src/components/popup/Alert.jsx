import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function AlertDialog({
  title,
  open,
  onClose,
  children,
  onConfirm,
  confirmText = null,
  cancelText = null,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableRestoreFocus
      maxWidth="xs"
      fullWidth
    >
      {title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent>
        <div>{children}</div>
      </DialogContent>

      {(cancelText || confirmText) && (
        <DialogActions>
          {cancelText && <Button onClick={onClose}>{cancelText}</Button>}
          {confirmText && (
            <Button variant="contained" onClick={onConfirm}>
              {confirmText}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

import { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({
  modalTitle = '',
  modalSize = 'md', // sm/md/lg
  scroll = 'paper',
  children,
  open,
  onClose,
  onConfirm,
  confirmText = '확인',
  cancelText = '취소',
}) {
  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: element } = descriptionElementRef;
      if (element !== null) {
        element.focus();
      }
    }
  }, [open]);
  return (
    <>
      <BootstrapDialog
        maxWidth={modalSize}
        scroll={scroll}
        open={open}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        aria-describedby="customized-dialog-description"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {modalTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={theme => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers={scroll === 'paper'}>
          <div ref={descriptionElementRef} tabIndex={-1}>
            {children}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{cancelText}</Button>
          <Button variant="contained" onClick={onConfirm}>
            {confirmText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

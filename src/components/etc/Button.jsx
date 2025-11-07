import MuiButton from '@mui/material/Button';
import { motion } from 'framer-motion';
import '@/styles/components/button/button.scss';

const MotionButton = motion(MuiButton);

export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  loadingText = '로딩중...',
  onClick,
  children,
  className = '',
  ...props
}) {
  const classes = [
    'button',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'fullWidth' : '',
    disabled || loading ? 'disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MotionButton
      type={type}
      disabled={disabled || loading}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.01, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {loading ? (
        <span className="btn-icon">
          <i className="spinner" />
          {loadingText}
        </span>
      ) : (
        <>
          {iconLeft && <span className="btn-icon">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="btn-icon">{iconRight}</span>}
        </>
      )}
    </MotionButton>
  );
}

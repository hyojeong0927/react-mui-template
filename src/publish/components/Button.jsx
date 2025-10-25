import MuiButton from '@mui/material/Button';
import '@/styles/components/button/button.scss';

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
    <MuiButton
      type={type}
      disabled={disabled || loading}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <span className="spinner" />
          {loadingText}
        </span>
      ) : (
        <>
          {iconLeft && <span>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span>{iconRight}</span>}
        </>
      )}
    </MuiButton>
  );
}

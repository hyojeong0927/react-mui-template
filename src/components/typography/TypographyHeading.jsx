// components/TypographyHeading.js
import { Typography } from '@mui/material';

export default function TypographyHeading({
  level = 'h1',
  children,
  className = '',
  ...props
}) {
  return (
    <Typography
      variant={level}
      className={`typography ${level} ${className}`}
      {...props}
    >
      {children}
    </Typography>
  );
}

// components/TypographyHeading.js
import { Typography } from '@mui/material';

export default function TypographyHeading({
  level = 'h1',
  children,
  sx = {},
  ...props
}) {
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  return (
    <Typography
      variant={variantMap[level]}
      gutterBottom
      sx={{
        fontWeight: 600,
        color: 'text.primary',
        ...(level === 'h1' && { fontSize: '2rem' }),
        ...(level === 'h2' && { fontSize: '1.8rem' }),
        ...(level === 'h3' && { fontSize: '1.6rem' }),
        ...(level === 'h4' && { fontSize: '1.4rem' }),
        ...(level === 'h5' && { fontSize: '1.2rem' }),
        ...(level === 'h6' && { fontSize: '1.0rem' }),
        ...(level === 'subtitle1' && {
          fontSize: '0.9rem',
        }),
        ...(level === 'subtitle2' && { fontSize: '0.9em' }),
        ...(level === 'body1' && { fontSize: '0.9rem', fontWeight: 'normal' }),
        ...(level === 'button' && { fontSize: '0.9rem', fontWeight: 'normal' }),
        ...(level === 'caption' && {
          fontSize: '0.9rem',
          fontWeight: 'normal',
        }),
        ...(level === 'overline' && {
          fontSize: '0.9rem',
          fontWeight: 'normal',
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

// components/TypographyHeading.js
import { Typography } from '@mui/material';

export default function TypographyHeading({
  level = 'h1',
  as = level, // 실제 태그 (예: <h2> 로 출력하고 싶을 때)
  children,
  className = '',
  ...props
}) {
  return (
    <Typography
      variant={level} // 스타일
      component={as} // DOM 태그
      className={`typography ${level} ${className}`}
      {...props}
    >
      {children}
    </Typography>
  );
}

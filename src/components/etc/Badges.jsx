import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function Badges({
  count = 0,
  color = 'primary',
  icon = null,
  children,
}) {
  const notificationsLabel = count => {
    if (count === 0) return 'no notifications';
    if (count > 99) return 'more than 99 notifications';
    return `${count} notifications`;
  };

  return (
    <IconButton aria-label={notificationsLabel(count)}>
      <Badge badgeContent={count > 99 ? '99+' : count} color={color}>
        {icon ? icon : children}
      </Badge>
    </IconButton>
  );
}

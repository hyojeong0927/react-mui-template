import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import pathNameMap from '@/config/pathNameMap';

export default function BasicBreadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname
    .split('/')
    .filter(x => x)
    // 숫자 및 ID 형태는 제외
    .filter(segment => !/^[0-9a-fA-F-]+$/.test(segment));

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} underline="hover" color="inherit" to="/">
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = pathNameMap[value] || value;

        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={to} color="text.primary">
            {label}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={to}
          >
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

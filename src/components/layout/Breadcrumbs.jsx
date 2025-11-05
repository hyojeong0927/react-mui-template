import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// 경로 → 한글명 매핑
const pathNameMap = {
  // dashboard: '대시보드',
  // pages: '페이지',
  // user: '사용자',
  // detail: '상세',
  'guide-product': 'Product',
  'guide-scroll': 'Scroll',
  'guide-badge': 'Badge',
  'guide-accordion': 'Accordion',
  'guide-aggrid': 'Ag Grid',
  'guide-agree': 'Agree Form',
  'guide-button': 'Button',
  'guide-checkbox': 'Checkbox',
  'guide-form': 'Form',
  'guide-list': 'List',
  'guide-radio': 'Radio',
  'guide-select': 'Select Box',
  'guide-textfield': 'Text Field',
  'guide-typograph': 'Typography',
};

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

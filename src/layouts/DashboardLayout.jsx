import { Outlet } from 'react-router-dom';
import { Container, Main } from '@/components/layout/';

export default function DashboardLayout() {
  return (
    <Container>
      {/* <Sidebar /> */}
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

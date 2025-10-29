import { Outlet } from 'react-router-dom';
import { Container, Main } from '@/publish/components/layout/';

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

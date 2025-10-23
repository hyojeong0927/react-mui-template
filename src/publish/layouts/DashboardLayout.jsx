import { Outlet } from 'react-router-dom';
import Container from '@/publish/components/layout/Container';
import Main from '@/publish/components/layout/Main';
import Sidebar from '@/publish/components/layout/Sidebar';

export default function DashboardLayout() {
  return (
    <Container>
      <Sidebar />
      <Main className="">
        <Outlet />
      </Main>
    </Container>
  );
}

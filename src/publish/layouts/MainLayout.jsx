import { Outlet } from 'react-router-dom';
import { Container, Main, Header, Footer } from '@/publish/components/layout/';

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

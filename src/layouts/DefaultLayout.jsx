import { Outlet } from 'react-router-dom';
import { Container, Main, Header, Footer } from '@/components/layout/';

export default function DefaultLayout() {
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

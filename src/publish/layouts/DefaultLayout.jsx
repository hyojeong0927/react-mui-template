import { Outlet } from 'react-router-dom';
import Container from '@/publish/components/layout/Container';
import Main from '@/publish/components/layout/Main';
import Header from '@/publish/components/layout/Header';
import Footer from '@/publish/components/layout/Footer';

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

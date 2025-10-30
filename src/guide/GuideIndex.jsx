import { Outlet } from 'react-router-dom';
import { Button } from '@/components/';
import GuideSidebar from './GuideSidebar';
import './guide.scss';

export default function GuideIndex() {
  return (
    <section className="guide-container">
      <header className="guide-header">
        <h1 className="guide-logo">React + Mui</h1>
        <nav className="nav">
          <Button
            className="btn-nav"
            onClick={() => window.open('/status', '_blank')}
          >
            Publish Status
          </Button>
        </nav>
      </header>
      <GuideSidebar />
      <main className="guide-main">
        <Outlet />
      </main>
    </section>
  );
}

import { Outlet, Link } from 'react-router-dom';
import GuideSidebar from './GuideSidebar';
import './guide.scss';

export default function GuideIndex() {
  return (
    <section className="guide-container">
      <header className="guide-header">
        <h1 className="guide-logo">React + Mui</h1>
        {/* <nav className="nav">
          <Link to="/guide">Home</Link>
          <Link to="/guide/guide-agree">Components</Link>
        </nav> */}
      </header>
      <GuideSidebar />
      <main className="guide-main">
        <Outlet />
      </main>
    </section>
  );
}

import { Outlet, Link } from 'react-router-dom';

import GuideSibar from './common/GuideSibar';
import './guide.scss';

function GuideIndex() {
  return (
    <section className="guide-container">
      <header className="guide-header">
        <h1 className="guide-logo">
          <Link to="/guide" className="link">
            Guide/Components
          </Link>
        </h1>
      </header>
      <GuideSibar />
      <main className="guide-main">
        <Outlet />
      </main>
    </section>
  );
}

export default GuideIndex;

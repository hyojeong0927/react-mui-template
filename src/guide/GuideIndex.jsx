import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, BasicBreadcrumbs } from '@/components/';
import GuideSidebar from './GuideSidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './guide.scss';

export default function GuideIndex() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // 모바일용
  const [collapsed, setCollapsed] = useState(false); // 데스크톱용

  // 화면 크기 변경 시 자동 닫기 처리
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true); // 데스크톱일 땐 항상 열려 있음
      } else {
        setSidebarOpen(false); // 모바일일 땐 기본 닫힘
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`guide-container ${
        sidebarOpen ? 'sidebar-open' : 'sidebar-closed'
      } ${collapsed ? 'collapsed' : ''}`}
    >
      <header className="guide-header">
        <h1 className="guide-logo">React + Mui + Scss + 반응형</h1>
        <nav className="nav">
          <Button
            className="btn-sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
          <Button
            className="btn-nav"
            onClick={() => window.open('/status', '_blank')}
          >
            Publish Status
          </Button>
        </nav>
      </header>

      <GuideSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main className="guide-main">
        <BasicBreadcrumbs />
        <Outlet />
      </main>
    </section>
  );
}

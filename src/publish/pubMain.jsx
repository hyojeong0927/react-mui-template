import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/styles/global.scss';

// layout
import MainLayout from '@/publish/layouts/MainLayout';
import AuthLayout from '@/publish/layouts/AuthLayout';
import DashboardLayout from '@/publish/layouts/DashboardLayout';
import DefaultLayout from '@/publish/layouts/DefaultLayout';
import BlankLayout from '@/publish/layouts/BlankLayout';

// guide & status
import ButtonGuide from '@/publish/guide/ButtonGuide';
import PubStatusPage from '@/publish/status/PubStatusPage';

// pages
import Home from '@/publish/pages/Home';
import Login from '@/publish/pages/Login';
import Dashboard from '@/publish/pages/Dashboard';
import Card from '@/publish/pages/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/publish">
      <Routes>
        {/* Main */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* Pages */}
        <Route element={<DefaultLayout />}>
          <Route path="/pages/card" element={<Card />} />
        </Route>
        {/* Guide & Status */}
        <Route element={<BlankLayout />}>
          <Route path="/guide/button-guide" element={<ButtonGuide />} />
          <Route path="/status/pub-status" element={<PubStatusPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

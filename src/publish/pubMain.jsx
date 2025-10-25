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

// status & guide
import PubStatusPage from '@/publish/status/PubStatusPage';
import GuideIndex from './guide/GuideIndex';
import GuideRule from './guide/Rule';
import ButtonGuide from '@/publish/guide/components/ButtonGuide';

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
          <Route path="/pages/home" element={<Home />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/pages/login" element={<Login />} />
        </Route>

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/pages/dashboard" element={<Dashboard />} />
        </Route>

        {/* Status & Guide */}
        <Route element={<BlankLayout />}>
          <Route path="/" element={<PubStatusPage />} />

          {/* Guide */}
          <Route path="/guide" element={<GuideIndex />}>
            <Route index element={<GuideRule />} />
            <Route path="guide-button" element={<ButtonGuide />} />
          </Route>
        </Route>

        {/* Pages */}
        <Route element={<DefaultLayout />}>
          <Route path="/pages/card" element={<Card />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

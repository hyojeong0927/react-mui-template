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
import GuideIndex from '@/publish/guide/GuideIndex';

// guide
import AgreeGuide from '@/publish/guide/components/AgreeGuide';
import BoxGuide from '@/publish/guide/common/Box';
import ButtonGuide from '@/publish/guide/components/ButtonGuide';
import CheckboxGuide from '@/publish/guide/components/ChekboxGuide';
import RadioGuide from '@/publish/guide/components/RadioGuide';
import RuleGuide from '@/publish/guide/Rule';
import SelectGuide from '@/publish/guide/components/SelectGuide';
import TermGuide from '@/publish/guide/Term';
import TextFieldGuide from '@/publish/guide/components/TextFieldGuide';

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
            <Route index element={<RuleGuide />} />
            <Route path="guide-agree" element={<AgreeGuide />} />
            <Route path="guide-box" element={<BoxGuide />} />
            <Route path="guide-button" element={<ButtonGuide />} />
            <Route path="guide-checkbox" element={<CheckboxGuide />} />
            <Route path="guide-radio" element={<RadioGuide />} />
            <Route path="guide-select" element={<SelectGuide />} />
            <Route path="guide-textfield" element={<TextFieldGuide />} />
            <Route path="guide-term" element={<TermGuide />} />
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

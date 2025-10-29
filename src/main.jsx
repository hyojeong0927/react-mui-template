import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/styles/global.scss';

// layout
import {
  MainLayout,
  AuthLayout,
  DashboardLayout,
  DefaultLayout,
  BlankLayout,
} from '@/publish/layouts/';

// status & guide
import PubStatusPage from '@/publish/status/PubStatusPage';
import GuideIndex from '@/publish/guide/GuideIndex';

// guide
import {
  AgreeGuide,
  BoxGuide,
  ButtonGuide,
  CheckboxGuide,
  FormGroupGuide,
  LayoutGuide,
  RadioGuide,
  RuleGuide,
  SelectGuide,
  TermGuide,
  TextFieldGuide,
} from '@/publish/guide/';

// pages
import { Home, Login, Dashboard, Card } from '@/publish/pages/';

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
            <Route path="guide-form" element={<FormGroupGuide />} />
            <Route path="guide-layout" element={<LayoutGuide />} />
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

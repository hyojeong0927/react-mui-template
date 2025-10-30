import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
// layout
import {
  MainLayout,
  AuthLayout,
  DashboardLayout,
  DefaultLayout,
  BlankLayout,
} from '@/layouts/';

// status & guide
import PubStatusPage from '@/status/PubStatusPage';
import GuideIndex from '@/guide/GuideIndex';

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
} from '@/guide/';

// pages
import { Home, Login, Dashboard, Card } from '@/pages/';

function App() {
  return (
    <BrowserRouter>
      <SpeedInsights />
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
          <Route path="/status" element={<PubStatusPage />} />

          {/* Guide */}
          <Route path="/" element={<GuideIndex />}>
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
  );
}

export default App;

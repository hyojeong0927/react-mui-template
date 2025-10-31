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
  AccordionGuide,
  AgGridGuide,
  AgreeGuide,
  BottomSheetGuide,
  BoxGuide,
  ButtonGuide,
  ChartGuide,
  CheckboxGuide,
  FloatingbarGuide,
  FormGroupGuide,
  LayoutGuide,
  ListGuide,
  MarkupGuide,
  ModalGuide,
  RadioGuide,
  RuleGuide,
  SearchFormGuide,
  SelectGuide,
  StepGuide,
  StructureGuide,
  StyleGuide,
  TableGuide,
  TabsGuide,
  TermGuide,
  TextFieldGuide,
  TypograhpyGuide,
} from '@/guide/';

// pages
import { Home, Login, Dashboard, Card } from '@/pages/';

const Router = () => {
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
            <Route path="" element={<AccordionGuide />} />
            <Route path="" element={<AgGridGuide />} />
            <Route path="guide-agree" element={<AgreeGuide />} />
            <Route path="" element={<BottomSheetGuide />} />
            <Route path="guide-box" element={<BoxGuide />} />
            <Route path="guide-button" element={<ButtonGuide />} />
            <Route path="" element={<ChartGuide />} />
            <Route path="guide-checkbox" element={<CheckboxGuide />} />
            <Route path="" element={<FloatingbarGuide />} />
            <Route path="guide-form" element={<FormGroupGuide />} />
            <Route path="guide-layout" element={<LayoutGuide />} />
            <Route path="guide-list" element={<ListGuide />} />
            <Route path="" element={<MarkupGuide />} />
            <Route path="" element={<ModalGuide />} />
            <Route path="guide-radio" element={<RadioGuide />} />
            <Route path="" element={<SearchFormGuide />} />
            <Route path="guide-select" element={<SelectGuide />} />
            <Route path="" element={<StepGuide />} />
            <Route path="" element={<StructureGuide />} />
            <Route path="" element={<StyleGuide />} />
            <Route path="" element={<TableGuide />} />
            <Route path="" element={<TabsGuide />} />
            <Route path="guide-textfield" element={<TextFieldGuide />} />
            <Route path="guide-term" element={<TermGuide />} />
            <Route path="guide-typograph" element={<TypograhpyGuide />} />
          </Route>
        </Route>

        {/* Pages */}
        <Route element={<DefaultLayout />}>
          <Route path="/pages/card" element={<Card />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

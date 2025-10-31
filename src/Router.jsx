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
  ProductIndex,
  ProductList,
  ProductSticky,
  RadioGuide,
  RuleGuide,
  ScrollPage,
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

export default function Router() {
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
            <Route path="guide-accordion" element={<AccordionGuide />} />
            <Route path="guide-aggrid" element={<AgGridGuide />} />
            <Route path="guide-agree" element={<AgreeGuide />} />
            <Route path="guide-bottomsheet" element={<BottomSheetGuide />} />
            <Route path="guide-box" element={<BoxGuide />} />
            <Route path="guide-button" element={<ButtonGuide />} />
            <Route path="guide-chart" element={<ChartGuide />} />
            <Route path="guide-checkbox" element={<CheckboxGuide />} />
            <Route path="guide-floatingbar" element={<FloatingbarGuide />} />
            <Route path="guide-form" element={<FormGroupGuide />} />
            <Route path="guide-layout" element={<LayoutGuide />} />
            <Route path="guide-list" element={<ListGuide />} />
            <Route path="guide-markup" element={<MarkupGuide />} />
            <Route path="guide-modal" element={<ModalGuide />} />
            <Route path="guide-radio" element={<RadioGuide />} />
            <Route path="guide-scroll" element={<ScrollPage />} />
            <Route path="guide-search" element={<SearchFormGuide />} />
            <Route path="guide-select" element={<SelectGuide />} />
            <Route path="guide-step" element={<StepGuide />} />
            <Route path="guide-structure" element={<StructureGuide />} />
            <Route path="guide-style" element={<StyleGuide />} />
            <Route path="guide-table" element={<TableGuide />} />
            <Route path="guide-tabs" element={<TabsGuide />} />
            <Route path="guide-textfield" element={<TextFieldGuide />} />
            <Route path="guide-term" element={<TermGuide />} />
            <Route path="guide-typograph" element={<TypograhpyGuide />} />
            <Route path="guide-product" element={<ProductIndex />}>
              <Route index element={<ProductList />} />
              <Route path=":id" element={<ProductSticky />} />
            </Route>
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

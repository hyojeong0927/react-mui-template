import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PubMain from '@/publish/PubMain.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PubMain />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/monsieur-la-doulaise/latin-400.css';
import '@fontsource/pinyon-script/latin-400.css';
import '@fontsource/italiana/latin-400.css';
import '@fontsource/old-standard-tt/latin-400.css';
import '@fontsource/old-standard-tt/latin-400-italic.css';
import '@fontsource/old-standard-tt/latin-700.css';
import '@fontsource/courier-prime/latin-400.css';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

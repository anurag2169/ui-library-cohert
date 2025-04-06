import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from 'ui_library';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider initialTheme="light">
      <App />
    </ThemeProvider>
  </StrictMode>
);

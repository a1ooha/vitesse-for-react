import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = createRoot(document.querySelector('#app')!);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

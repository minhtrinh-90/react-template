import './index.css';
import '@/common/helpers/axios';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './app/app';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

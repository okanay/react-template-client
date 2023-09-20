// import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Layout from '~/pages/layout.tsx';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </>,
);

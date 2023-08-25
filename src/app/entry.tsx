import './base.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { InitializationComponent, store } from './core';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider>
        <InitializationComponent>
          <Router />
        </InitializationComponent>
      </RouterProvider>
    </ReduxProvider>
  </React.StrictMode>,
);

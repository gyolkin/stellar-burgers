import '@/shared/ui/base.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { InitializationComponent } from './init';
import { Router } from './router';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider basename={import.meta.env.VITE_DEV_MODE !== 'production' ? undefined : '/stellar-burgers' }>
        <InitializationComponent>
          <Router />
        </InitializationComponent>
      </RouterProvider>
    </ReduxProvider>
  </React.StrictMode>,
);

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { IngredientPage } from '@/pages/ingredient';
import { LoginPage } from '@/pages/login';
import { NotFoundPage } from '@/pages/not-found';
import { ProfilePage } from '@/pages/profile';
import { RegisterPage } from '@/pages/register';
import {
  navigationMap,
  type LocationState,
  constantsMap,
} from '@/shared/model';
import { Modal } from '@/shared/ui';
import { ProtectedRoute } from './core';
import { baseLayout, sidebarLayout } from './layout';

export const Router = () => {
  const location = useLocation();
  const background = (location.state as LocationState)?.background;
  const navigate = useNavigate();
  return (
    <>
      <Routes location={background || location}>
        <Route element={baseLayout}>
          <Route path={navigationMap.home} element={<HomePage />} />
          <Route path={navigationMap.feed} element={<div>Hello</div>} />
          <Route
            path={navigationMap.ingredientById}
            element={<IngredientPage />}
          />
          <Route
            path={navigationMap.login}
            element={
              <ProtectedRoute anonymous>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={navigationMap.register}
            element={
              <ProtectedRoute anonymous>
                <RegisterPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route element={sidebarLayout}>
          <Route
            path={navigationMap.profile}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path={navigationMap.ingredientById}
            element={
              <Modal
                heading={constantsMap.entities.ingredient.modal.headingText}
                onClose={() => {
                  navigate(-1);
                }}
              >
                <IngredientPage />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

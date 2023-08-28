import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ForgotPasswordPage } from '@/pages/forgot-password';
import { HomePage } from '@/pages/home';
import { IngredientPage } from '@/pages/ingredient';
import { LoginPage } from '@/pages/login';
import { NotFoundPage } from '@/pages/not-found';
import { RegisterPage } from '@/pages/register';
import { ResetPasswordPage } from '@/pages/reset-password';
import { ProfileForm } from '@/features/auth/profile';
import { ProtectedRoute } from '@/entities/user';
import {
  navigationMap,
  type LocationState,
  constantsMap,
} from '@/shared/model';
import { Modal } from '@/shared/ui';
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
          <Route
            path={navigationMap.forgotPassword}
            element={
              <ProtectedRoute anonymous>
                <ForgotPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={navigationMap.resetPassword}
            element={
              <ProtectedRoute anonymous>
                <ResetPasswordPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route element={sidebarLayout}>
          <Route
            path={navigationMap.profile}
            element={
              <ProtectedRoute>
                <ProfileForm />
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

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { IngredientPage } from '@/pages/ingredient';
import { NotFoundPage } from '@/pages/not-found';
import { useGetIngredientsQuery } from '@/entities/ingredient';
import {
  navigationMap,
  constantsMap,
  type LocationState,
} from '@/shared/model';
import { Modal, Paragraph } from '@/shared/ui';
import { baseLayout, sidebarLayout } from './layout';

export const Router = () => {
  const location = useLocation();
  const background = (location.state as LocationState)?.background;
  const navigate = useNavigate();
  const { isLoading: isIngredientsLoading, isError: isIngredientsError } =
    useGetIngredientsQuery();

  if (isIngredientsLoading) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <img
          src='/img/slogo.png'
          width='100'
          height='100'
          className='animate-pulse'
          alt='loader logo'
        />
      </div>
    );
  }

  if (isIngredientsError) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Paragraph size='large'>{constantsMap.texts.errorInfo}</Paragraph>
      </div>
    );
  }

  return (
    <>
      <Routes location={background || location}>
        <Route element={baseLayout}>
          <Route path={navigationMap.home} element={<HomePage />} />
          <Route path={navigationMap.feed} element={<HomePage />} />
          <Route
            path={navigationMap.ingredients + '/:id'}
            element={<IngredientPage />}
          />
        </Route>
        <Route element={sidebarLayout}>
          <Route path={navigationMap.profile} element={<HomePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path={navigationMap.ingredients + '/:id'}
            element={
              <Modal
                heading='Детали ингредиента'
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

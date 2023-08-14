import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { useGetIngredientsQuery } from '@/entities/ingredients';
import { navigationMap, constantsMap } from '@/shared/model';
import { Paragraph, FlexContainer } from '@/shared/ui';
import { baseLayout, sidebarLayout } from './layout';

export const Router = () => {
  const { isLoading: isIngredientsLoading, isError: isIngredientsError } =
    useGetIngredientsQuery();

  if (isIngredientsLoading) {
    return (
      <FlexContainer className='h-screen'>
        <img
          src='/img/slogo.png'
          width='100'
          height='100'
          className='animate-pulse'
          alt='loader logo'
        />
      </FlexContainer>
    );
  }

  if (isIngredientsError) {
    return (
      <FlexContainer className='h-screen'>
        <Paragraph size='large'>{constantsMap.texts.errorInfo}</Paragraph>
      </FlexContainer>
    );
  }

  return (
    <Routes>
      <Route element={baseLayout}>
        <Route path={navigationMap.home} element={<HomePage />} />
        <Route path={navigationMap.feed} element={<HomePage />} />
      </Route>
      <Route element={sidebarLayout}>
        <Route path={navigationMap.profile} element={<HomePage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

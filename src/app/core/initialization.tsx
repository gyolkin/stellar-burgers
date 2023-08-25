import { skipToken } from '@reduxjs/toolkit/dist/query';
import Cookies from 'js-cookie';
import { useGetIngredientsQuery } from '@/entities/ingredient';
import { useGetMeQuery } from '@/entities/user';
import { getApiError } from '@/shared/lib';
import { Loader, Paragraph } from '@/shared/ui';

export const InitializationComponent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    isLoading: isIngredientsLoading,
    isError: isIngredientsError,
    error: ingredientsError,
  } = useGetIngredientsQuery();

  const {
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useGetMeQuery(Cookies.get('accessToken') ? undefined : skipToken);

  if (isIngredientsLoading || isUserLoading) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Loader />
      </div>
    );
  }

  if (isIngredientsError && ingredientsError) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Paragraph size='large'>{getApiError(ingredientsError)}</Paragraph>
      </div>
    );
  }

  if (isUserError && userError) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Paragraph size='large'>{getApiError(userError)}</Paragraph>
      </div>
    );
  }

  return children;
};

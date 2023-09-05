import { skipToken } from '@reduxjs/toolkit/dist/query';
import Cookies from 'js-cookie';
import { useGetIngredientsQuery } from '@/entities/ingredient';
import { useGetMeQuery } from '@/entities/user';
import { getApiError, removeCookies } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Button, Loader, Paragraph } from '@/shared/ui';

export const InitializationComponent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { reloadPageText } = constantsMap.shared.config;
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
    return <Loader screen />;
  }

  if (isIngredientsError && ingredientsError) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Paragraph size='large'>{getApiError(ingredientsError)}</Paragraph>
        <Button onClick={() => window.location.reload()}>
          {reloadPageText}
        </Button>
      </div>
    );
  }

  if (isUserError && userError) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Paragraph size='large'>{getApiError(userError)}</Paragraph>
        <Button
          onClick={() => {
            removeCookies();
            window.location.reload();
          }}
        >
          {reloadPageText}
        </Button>
      </div>
    );
  }

  return children;
};

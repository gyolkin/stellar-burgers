import Cookies from 'js-cookie';
import { setLoggedOut, usePostLogoutMutation } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Button } from '@/shared/ui';

export const LogoutButton: React.FC = () => {
  const { logoutButton, loadingText } = constantsMap.features.auth.logout;
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = usePostLogoutMutation();
  const token = Cookies.get('refreshToken');
  return (
    <Button
      onClick={() => (token ? logout({ token }) : dispatch(setLoggedOut()))}
      variant='link'
      className='justify-start hover:transition-none hover:scale-100 duration-0 p-0 text-xl'
    >
      {isLoading ? loadingText : logoutButton}
    </Button>
  );
};

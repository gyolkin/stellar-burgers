import { selectIsAuthenticated } from '@/entities/user';
import { useAppSelector } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { NavigationLink } from '@/shared/ui';

export const ProfileButton: React.FC = () => {
  const { loginLink, profileLink } = constantsMap.features.auth.login;
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return (
      <NavigationLink to={navigationMap.profile} icon='ProfileIcon'>
        {profileLink}
      </NavigationLink>
    );
  }
  return (
    <NavigationLink to={navigationMap.login} icon='LoginIcon'>
      {loginLink}
    </NavigationLink>
  );
};

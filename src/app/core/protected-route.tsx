import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '@/entities/user';
import { useAppSelector } from '@/shared/lib';
import { navigationMap } from '@/shared/model';

interface ProtectedRouteProps extends React.PropsWithChildren {
  anonymous?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  anonymous = false,
}) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (anonymous && isAuthenticated) {
    return <Navigate to={navigationMap.home} />;
  }
  if (!anonymous && !isAuthenticated) {
    return <Navigate to={navigationMap.login} />;
  }
  return children;
};

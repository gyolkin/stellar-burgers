import { useNavigate } from 'react-router-dom';
import { navigationMap } from '@/shared/model';

export const useBackButton = () => {
  const navigate = useNavigate();
  return () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(navigationMap.home, { replace: true });
    }
  };
};

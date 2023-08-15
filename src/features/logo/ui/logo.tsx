import { Link } from 'react-router-dom';
import { navigationMap } from '@/shared/model';

export const MobileLogo: React.FC = () => {
  return (
    <Link to={navigationMap.home}>
      <img src='/img/slogo.png' alt='mobile logo' width='50' height='50' />
    </Link>
  );
};

export const Logo: React.FC = () => {
  return (
    <Link to={navigationMap.home}>
      <img
        src='/img/logo.png'
        alt='logo'
        width='290'
        height='50'
        className='hover:transition-all hover:scale-105 duration-500'
      />
    </Link>
  );
};

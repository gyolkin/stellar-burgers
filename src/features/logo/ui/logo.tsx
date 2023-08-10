import { Link } from 'react-router-dom';
import { navigationMap } from '@/shared/model';

export const MobileLogo = () => {
  return (
    <Link to={navigationMap.home}>
      <img
        src='/img/slogo.png'
        alt='mobile logo'
        className='w-[50px] h-[50px]'
      />
    </Link>
  );
};

export const Logo = () => {
  return (
    <Link to={navigationMap.home}>
      <img
        src='/img/logo.png'
        alt='logo'
        className='w-[290px] h-[50px] hover:transition-all hover:scale-105 duration-500'
      />
    </Link>
  );
};

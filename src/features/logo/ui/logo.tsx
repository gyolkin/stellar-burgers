import { Link } from 'react-router-dom';
import { navigationMap } from '@/shared/model';
import logo from '@/shared/ui/logo.png';
import slogo from '@/shared/ui/slogo.png';

export const MobileLogo: React.FC = () => {
  return (
    <Link to={navigationMap.home}>
      <img src={slogo} alt='mobile logo' width='50' height='50' />
    </Link>
  );
};

export const Logo: React.FC = () => {
  return (
    <Link to={navigationMap.home}>
      <img
        src={logo}
        alt='logo'
        width='290'
        height='50'
        className='hover:scale-110 duration-500'
      />
    </Link>
  );
};

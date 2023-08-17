import { useState } from 'react';
import { Logo, MobileLogo } from '@/features/logo';
import { cn } from '@/shared/lib';
import { navigationMap, iconsMap, constantsMap } from '@/shared/model';
import { NavigationLink, Button } from '@/shared/ui';

export const LayoutNavbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='flex container mx-auto h-full items-center px-2 lg:px-0'>
      <div className='hidden lg:flex flex-1 gap-10'>
        <NavigationLink to={navigationMap.home} icon='BurgerIcon'>
          {constantsMap.navbar.home}
        </NavigationLink>
        <NavigationLink to={navigationMap.feed} icon='FeedIcon'>
          {constantsMap.navbar.feed}
        </NavigationLink>
      </div>
      <div className='hidden lg:flex justify-center'>
        <Logo />
      </div>
      <div className='hidden lg:flex flex-1 justify-end'>
        <NavigationLink to={navigationMap.profile} icon='ProfileIcon'>
          {constantsMap.navbar.login}
        </NavigationLink>
      </div>
      <div className='lg:hidden flex items-center justify-between w-full'>
        <MobileLogo />
        <Button
          variant='link'
          size='icon'
          className='text-white'
          onClick={() => setMenuOpen(true)}
        >
          <iconsMap.MenuIcon />
        </Button>
      </div>
      <div
        className={cn(
          'lg:hidden z-10 fixed top-0 right-0 h-full w-64 bg-dark transform',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          'transition-transform duration-300 ease-in-out',
        )}
      >
        <div className='flex justify-end pt-10 pr-5'>
          <Button
            variant='link'
            size='icon'
            className='text-white'
            onClick={() => setMenuOpen(false)}
          >
            <iconsMap.CloseIcon />
          </Button>
        </div>
        <div className='flex flex-col gap-6 p-8'>
          <NavigationLink to={navigationMap.home} icon='BurgerIcon'>
            {constantsMap.navbar.home}
          </NavigationLink>
          <NavigationLink to={navigationMap.feed} icon='FeedIcon'>
            {constantsMap.navbar.feed}
          </NavigationLink>
          <NavigationLink to={navigationMap.profile} icon='ProfileIcon'>
            {constantsMap.navbar.login}
          </NavigationLink>
        </div>
      </div>
    </nav>
  );
};

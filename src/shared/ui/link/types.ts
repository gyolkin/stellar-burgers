import type { NavLinkProps } from 'react-router-dom';

export interface NavigationLinkProps extends NavLinkProps {
  icon?: 'FeedIcon' | 'BurgerIcon' | 'ProfileIcon' | 'LoginIcon';
}

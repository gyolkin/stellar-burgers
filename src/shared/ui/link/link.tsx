import { NavLink } from 'react-router-dom';
import { cn } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import type { NavigationLinkProps } from './types';

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  icon,
  children,
  className,
  ...props
}) => {
  const IconComponent = icon ? iconsMap[icon] : null;
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        cn(
          'flex flex-row gap-2',
          isActive ? 'text-white' : 'text-inactive',
          className,
        )
      }
    >
      <>
        {IconComponent && <IconComponent />}
        {children}
      </>
    </NavLink>
  );
};

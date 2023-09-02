import { LogoutButton } from '@/features/auth/logout';
import { navigationMap, constantsMap } from '@/shared/model';
import { NavigationLink, Paragraph } from '@/shared/ui';

export const LayoutSidebar: React.FC = () => {
  const { mainLink, ordersLink, footerText } =
    constantsMap.widgets.layoutSidebar;
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 lg:flex-col lg:gap-8'>
      <NavigationLink to={navigationMap.profile} className='text-xl' end>
        {mainLink}
      </NavigationLink>
      <NavigationLink to={navigationMap.profileOrders} className='text-xl'>
        {ordersLink}
      </NavigationLink>
      <LogoutButton />
      <Paragraph variant='inactive' className='hidden lg:block lg:pt-10'>
        {footerText}
      </Paragraph>
    </div>
  );
};

import { navigationMap, constantsMap } from '@/shared/model';
import { NavigationLink, Button, Paragraph } from '@/shared/ui';

export const LayoutSidebar: React.FC = () => {
  return (
    <div className='flex flex-row flex-wrap lg:flex-col gap-8'>
      <NavigationLink to={navigationMap.profile} className='text-lg'>
        {constantsMap.sidebar.main}
      </NavigationLink>
      <NavigationLink to={navigationMap.profileOrders} className='text-lg'>
        {constantsMap.sidebar.orders}
      </NavigationLink>
      <Button
        variant='link'
        className='justify-start hover:transition-none hover:scale-100 duration-0 p-0 text-lg'
      >
        {constantsMap.sidebar.logout}
      </Button>
      <Paragraph variant='inactive' className='lg:pt-10'>
        {constantsMap.texts.sidebarInfo}
      </Paragraph>
    </div>
  );
};

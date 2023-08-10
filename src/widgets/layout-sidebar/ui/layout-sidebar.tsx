import { navigationMap } from '@/shared/model';
import { NavigationLink, Button, Paragraph } from '@/shared/ui';

export const LayoutSidebar = () => {
  return (
    <div className='flex flex-row flex-wrap lg:flex-col gap-8'>
      <NavigationLink to={navigationMap.profile} className='text-lg'>
        Профиль
      </NavigationLink>
      <NavigationLink to={navigationMap.profileOrders} className='text-lg'>
        История заказов
      </NavigationLink>
      <Button
        variant='link'
        className='justify-start hover:transition-none hover:scale-100 duration-0 p-0 text-lg'
      >
        Выйти
      </Button>
      <Paragraph variant='inactive' className='lg:pt-10'>
        В этом разделе вы можете изменить свои персональные данные
      </Paragraph>
    </div>
  );
};

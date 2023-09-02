import { Link, useLocation } from 'react-router-dom';
import { constantsMap, navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { OrderProps } from '../model';

export const Order: React.FC<OrderProps> = ({
  number,
  status,
  name,
  date,
  priceSlot,
  ingredientSlot,
}) => {
  const location = useLocation();
  const statusByTag = constantsMap.entities.order.status[status];
  return (
    <Link
      to={
        location.pathname === navigationMap.feed
          ? navigationMap.feed + `/${number}`
          : navigationMap.profileOrders + `/${number}`
      }
      state={{ background: location }}
      className='block bg-dark rounded-3xl mx-2 mb-2'
    >
      <div className='flex flex-col gap-2 p-6'>
        <div className='flex justify-between mb-4'>
          <Paragraph font='digits' size='medium'>
            #{number}
          </Paragraph>
          <Paragraph variant='inactive'>{date}</Paragraph>
        </div>
        <Paragraph size='medium' className='font-bold'>
          {name}
        </Paragraph>
        <Paragraph variant='success' className='mb-4'>
          {statusByTag}
        </Paragraph>
        <div className='flex justify-between items-center'>
          {ingredientSlot}
          {priceSlot}
        </div>
      </div>
    </Link>
  );
};

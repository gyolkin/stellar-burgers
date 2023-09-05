import Cookies from 'js-cookie';
import { OrderCard } from '@/widgets/order-card';
import { useGetStreamingOrderQuery } from '@/entities/order';
import { apiMap, constantsMap } from '@/shared/model';
import { Paragraph, ScrollArea } from '@/shared/ui';

export const ProfileOrdersPage: React.FC = () => {
  const { errorText, loadingText } = constantsMap.pages.profile.orders;
  const { data } = useGetStreamingOrderQuery(
    apiMap.getStreamingUserOrders +
      `?token=${Cookies.get('accessToken')?.replace('Bearer ', '')}`,
  );

  if (!data || (data && data.success === undefined)) {
    return <Paragraph className='text-center'>{loadingText}</Paragraph>;
  }

  if (data && !data.success) {
    return (
      <Paragraph variant='error' className='text-center'>
        {errorText}
      </Paragraph>
    );
  }

  if (data && data.success) {
    return (
      <>
        {data && (
          <ScrollArea size='long' className='flex flex-col lg:basis-1/2'>
            {data.orders.map((item) => (
              <OrderCard
                key={item.number}
                ingredients={item.ingredients}
                status={item.status}
                name={item.name}
                number={item.number}
                createdAt={item.createdAt}
              />
            ))}
          </ScrollArea>
        )}
      </>
    );
  }
};

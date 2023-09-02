import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import {
  IngredientPrice,
  OrderIngredient,
  getIngredientsWithCounter,
  useIngredientsById,
} from '@/entities/ingredient';
import { useGetOrderQuery } from '@/entities/order';
import { formatDate, getApiError } from '@/shared/lib';
import {
  type LocationState,
  navigationMap,
  constantsMap,
} from '@/shared/model';
import { Loader, Paragraph, ScrollArea } from '@/shared/ui';

export const OrderPage: React.FC = () => {
  const { status } = constantsMap.entities.order;
  const { loadingText, ingredientsText } = constantsMap.pages.order;
  const location = useLocation();
  const { id } = useParams();
  const background = (location.state as LocationState)?.background;
  const { data, isLoading, isError, error, isSuccess } = useGetOrderQuery(
    id ?? skipToken,
  );
  const { ingredients, totalPrice } = useIngredientsById({
    ids: data?.ingredients,
  });

  if (isSuccess && !data?._id && !background) {
    return <Navigate to={navigationMap.error404} replace />;
  }

  if (isLoading) {
    return <Loader text={loadingText} className='pt-2 lg:pt-10' />;
  }

  if (isError) {
    return <div>{getApiError(error)}</div>;
  }

  if (data) {
    return (
      <div className='flex flex-col gap-5 lg:gap-10 max-w-2xl mx-auto'>
        {!background && (
          <Paragraph
            font='digits'
            size='medium'
            className='text-center py-2 lg:py-10'
          >
            #{id}
          </Paragraph>
        )}
        <div className='flex flex-col gap-2'>
          <Paragraph className='font-bold' size='medium'>
            {data.name}
          </Paragraph>
          <Paragraph variant='success'>{status[data.status]}</Paragraph>
        </div>
        <div className='flex flex-col gap-4'>
          <Paragraph className='font-bold' size='medium'>
            {ingredientsText}
          </Paragraph>
          <ScrollArea size='short' className='flex flex-col gap-2 pr-2'>
            {getIngredientsWithCounter(ingredients).map((item, index) => (
              <OrderIngredient
                key={index}
                image_mobile={item.image_mobile}
                name={item.name}
                price={item.price}
                count={item.count}
              />
            ))}
          </ScrollArea>
        </div>
        <div className='flex flex-row flex-nowrap justify-between'>
          <Paragraph variant='inactive'>{formatDate(data.createdAt)}</Paragraph>
          <IngredientPrice value={totalPrice} />
        </div>
      </div>
    );
  }
};

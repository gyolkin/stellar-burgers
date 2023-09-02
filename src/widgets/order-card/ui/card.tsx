import {
  IngredientIcon,
  IngredientPrice,
  useIngredientsById,
} from '@/entities/ingredient';
import { Order } from '@/entities/order';
import { cn } from '@/shared/lib';
import { formatDate } from '@/shared/lib';
import { Paragraph } from '@/shared/ui';
import type { OrderCardProps } from '../model';

export const OrderCard: React.FC<OrderCardProps> = ({
  name,
  number,
  createdAt,
  status,
  ingredients,
}) => {
  const { ingredients: list, totalPrice } = useIngredientsById({
    ids: ingredients,
  });
  const visibleIngredients = list.slice(0, 5);
  const hiddenCount = list.length - 5;

  return (
    <Order
      name={name}
      number={number}
      date={formatDate(createdAt)}
      status={status}
      priceSlot={<IngredientPrice value={totalPrice} />}
      ingredientSlot={
        <div className='inline-flex'>
          {visibleIngredients.map((item, index) => (
            <IngredientIcon
              key={index}
              className={cn(index !== 0 && 'ml-[-20px]')}
              image={item.image_mobile}
            />
          ))}
          {hiddenCount > 0 && (
            <div className='flex items-center justify-center bg-gradient-to-r from-purple to-accent rounded-full w-12 h-12 lg:w-16 lg:h-16 ml-[-20px]'>
              <Paragraph
                font='digits'
                size='medium'
                className='bg-dark rounded-full h-[44px] w-[44px] lg:w-[60px] lg:h-[60px] text-center pt-1 lg:pt-3'
              >
                +{hiddenCount}
              </Paragraph>
            </div>
          )}
        </div>
      }
    />
  );
};

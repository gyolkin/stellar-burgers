import { useIngredientDrop } from '@/features/constructor/add';
import { selectConstructor } from '@/entities/constructor';
import { cn, useAppSelector } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Heading } from '@/shared/ui';
import { MemoizedConstructorElement } from './card';
import { PriceSummary } from './price';

export const ConstructorContainer: React.FC = () => {
  const { onAddBunText, onEmptyText } =
    constantsMap.widgets.constructorContainer;
  const { isHover, dropTarget } = useIngredientDrop();
  const { bun, ingredients } = useAppSelector(selectConstructor);
  return (
    <div
      ref={dropTarget}
      className={cn(
        'flex flex-col w-full lg:basis-1/2 justify-between lg:pt-10',
        isHover
          ? 'border-dashed border-2 border-inactive rounded-lg'
          : 'border-solid border-2 border-transparent',
      )}
    >
      {ingredients.length > 0 || bun ? (
        <div className='hidden lg:flex flex-col gap-2'>
          {bun ? (
            <MemoizedConstructorElement
              name={bun.name}
              price={bun.price}
              image={bun.image}
              type={bun.type}
              positionClassName='rounded-[88px_88px_40px_40px]'
            />
          ) : (
            <Heading className='hidden lg:block text-shadow text-center pb-10'>
              {onAddBunText}
            </Heading>
          )}
          <div className='flex flex-col gap-2 overflow-x-hidden overflow-y-auto scroll-smooth max-h-[36vh]'>
            {ingredients?.map((item, index) => (
              <MemoizedConstructorElement
                index={index}
                key={item.constructorId}
                name={item.name}
                price={item.price}
                image={item.image}
                type={item.type}
                positionClassName='rounded-full'
              />
            ))}
          </div>
          {bun && (
            <MemoizedConstructorElement
              name={bun.name}
              price={bun.price}
              image={bun.image}
              type={bun.type}
              positionClassName='rounded-[40px_40px_88px_88px]'
            />
          )}
        </div>
      ) : (
        <Heading className='hidden lg:block text-shadow text-center lg:pt-48'>
          {onEmptyText}
        </Heading>
      )}
      <PriceSummary />
    </div>
  );
};

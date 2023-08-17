import { v4 as uuid4 } from 'uuid';
import { useIngredientDrop } from '@/features/constructor/add';
import { selectConstructor } from '@/entities/constructor';
import { Constructor } from '@/entities/constructor';
import { useAppSelector } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { FlexContainer, Heading } from '@/shared/ui';
import { ConstructorElementDetails } from './constructor-details';
import { PriceDetails } from './price-details';

export const OrderContainer: React.FC = () => {
  const { isHover, dropTarget } = useIngredientDrop();
  const { bun, ingredients } = useAppSelector(selectConstructor);
  return (
    <Constructor
      dropTarget={dropTarget}
      hoverClass={isHover && 'border-dashed border-2 border-inactive'}
      priceSlot={<PriceDetails />}
    >
      {ingredients.length > 0 || bun ? (
        <FlexContainer variant='colStart' className='hidden lg:flex gap-2'>
          {bun ? (
            <ConstructorElementDetails
              ingredient={bun}
              positionClassName='rounded-[88px_88px_40px_40px]'
            />
          ) : (
            <Heading className='hidden lg:block text-shadow text-center pb-10'>
              {constantsMap.texts.constructorAddBunAction}
            </Heading>
          )}
          <FlexContainer
            variant='colStart'
            className='gap-2 overflow-x-hidden overflow-y-auto scroll-smooth max-h-[36vh]'
          >
            {ingredients?.map((item, index) => (
              <ConstructorElementDetails
                key={uuid4()}
                index={index}
                ingredient={item}
                positionClassName='rounded-full'
              />
            ))}
          </FlexContainer>
          {bun && (
            <ConstructorElementDetails
              ingredient={bun}
              positionClassName='rounded-[40px_40px_88px_88px]'
            />
          )}
        </FlexContainer>
      ) : (
        <Heading className='hidden lg:block text-shadow text-center lg:pt-48'>
          {constantsMap.texts.constructorAction}
        </Heading>
      )}
    </Constructor>
  );
};

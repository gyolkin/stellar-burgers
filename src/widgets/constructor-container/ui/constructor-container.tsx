import { v4 as uuid4 } from 'uuid';
import { useIngredientDrop } from '@/features/constructor/add';
import {
  ConstructorElement,
  removeIngredient,
  selectConstructor,
} from '@/entities/constructor';
import { cn, useAppDispatch, useAppSelector } from '@/shared/lib';
import { FlexContainer } from '@/shared/ui';
import { PriceDetails } from './price-details';

export const OrderContainer = () => {
  const { isHover, dropTarget } = useIngredientDrop();
  const { bun, ingredients } = useAppSelector(selectConstructor);
  const dispatch = useAppDispatch();
  return (
    // DECOMPOSITION NEEDED
    <FlexContainer
      variant='colStart'
      ref={dropTarget}
      className={cn(
        'w-full lg:basis-1/2 justify-between lg:pt-10 rounded-lg',
        isHover && 'border-dashed border-2 border-inactive',
      )}
    >
      <FlexContainer variant='colStart' className='hidden lg:flex gap-2'>
        {bun ? (
          <ConstructorElement
            image={bun.image}
            name={`${bun.name} (верх)`}
            price={bun.price}
            isLocked
            type='top'
          />
        ) : (
          <ConstructorElement
            image='https://code.s3.yandex.net/react/code/bun-02.png'
            name='Добавьте булочку'
            price={0}
            isLocked
            type='top'
          />
        )}
        <FlexContainer
          variant='colStart'
          className='gap-2 overflow-x-hidden overflow-y-auto scroll-smooth max-h-[40vh]'
        >
          {ingredients?.map((item, index) => (
            // TODO: ADD REMOVE SLOT (!!) DON'T USE ENTITY HERE
            <ConstructorElement
              key={uuid4()}
              index={index}
              image={item.image}
              name={item.name}
              price={item.price}
              handleClose={() => dispatch(removeIngredient({ index }))}
            />
          ))}
        </FlexContainer>
        {bun ? (
          <ConstructorElement
            image={bun.image}
            name={`${bun.name} (низ)`}
            price={bun.price}
            isLocked
            type='bottom'
          />
        ) : (
          <ConstructorElement
            image='https://code.s3.yandex.net/react/code/bun-02.png'
            name='Добавьте булочку'
            price={0}
            isLocked
            type='bottom'
          />
        )}
      </FlexContainer>
      <PriceDetails />
      {/* <Heading className="hidden lg:block text-shadow text-center lg:pt-48">{constantsMap.texts.constructorAction}</Heading> */}
    </FlexContainer>
  );
};

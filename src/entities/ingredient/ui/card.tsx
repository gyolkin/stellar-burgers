import { FlexContainer, Paragraph } from '@/shared/ui';
import type { IngredientProps } from '../model';

export const Ingredient: React.FC<IngredientProps> = ({
  name,
  image,
  counterSlot,
  removeSlot,
  addSlot,
  priceSlot,
  dragRef,
}) => {
  return (
    <FlexContainer
      ref={dragRef}
      className='relative gap-2 basis-2/5 hover:transition-all hover:scale-110 duration-500 hover:cursor-pointer'
    >
      {counterSlot}
      <img src={image} alt={name} />
      {priceSlot}
      <Paragraph size='small' className='text-center'>
        {name}
      </Paragraph>
      <FlexContainer
        variant='rowStart'
        className='flex-nowrap gap-4 pt-2 lg:hidden'
      >
        {removeSlot}
        {addSlot}
      </FlexContainer>
    </FlexContainer>
  );
};

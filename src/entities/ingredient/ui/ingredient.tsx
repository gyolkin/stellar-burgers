import { iconsMap } from '@/shared/model';
import { FlexContainer, Paragraph } from '@/shared/ui';
import type { IngredientProps } from '../model';

export const Ingredient: React.FC<IngredientProps> = ({
  name,
  price,
  image,
  counterSlot,
  removeSlot,
  addSlot,
  dragRef,
}) => {
  return (
    <FlexContainer
      ref={dragRef}
      className='relative gap-2 basis-2/5 hover:transition-all hover:scale-110 duration-500 hover:cursor-pointer'
    >
      {counterSlot}
      <img src={image} alt={name} />
      <span className='inline-flex items-center gap-2'>
        <Paragraph font='digits' size='medium'>
          {price}
        </Paragraph>
        <iconsMap.PriceIcon />
      </span>
      <Paragraph size='small' className='text-center'>
        {name}
      </Paragraph>
      <FlexContainer
        variant='rowStart'
        className='flex-nowrap gap-4 pt-2 lg:hidden'
      >
        {removeSlot} {addSlot}
      </FlexContainer>
    </FlexContainer>
  );
};

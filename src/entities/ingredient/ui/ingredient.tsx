import { iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { IngredientProps } from '../model';

export const Ingredient: React.FC<IngredientProps> = ({
  name,
  price,
  image,
  counterSlot,
}) => {
  return (
    <div className='relative flex flex-col gap-2 basis-2/5 items-center hover:transition-all hover:scale-110 duration-500 hover:cursor-pointer'>
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
      <span className='flex flex-row flex-nowrap gap-4 pt-2 lg:hidden'>
        <Paragraph variant='error' size='small'>
          Удалить
        </Paragraph>
        <Paragraph size='small'>Добавить</Paragraph>
      </span>
    </div>
  );
};

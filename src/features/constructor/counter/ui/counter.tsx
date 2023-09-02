import { selectIngredientCountById } from '@/entities/constructor';
import type { IngredientObject } from '@/entities/ingredient';
import { useAppSelector } from '@/shared/lib';
import { Paragraph } from '@/shared/ui';

export const Counter: React.FC<Pick<IngredientObject, '_id'>> = ({ _id }) => {
  const count: number = useAppSelector(selectIngredientCountById(_id));
  if (count < 1) {
    return undefined;
  }
  return (
    <div className='absolute right-0 top-0 min-w-[16px] h-[32px] px-2 flex items-center justify-center bg-accent rounded-full'>
      <Paragraph font='digits' size='medium'>
        {count}
      </Paragraph>
    </div>
  );
};

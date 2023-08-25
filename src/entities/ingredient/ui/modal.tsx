import { Paragraph } from '@/shared/ui';
import type { IngredientModalProps } from '../model';
import { createDetails } from './utils';

export const IngredientModal: React.FC<IngredientModalProps> = ({
  name,
  image_large,
  calories,
  carbohydrates,
  fat,
  proteins,
}) => {
  const details = createDetails(calories, carbohydrates, fat, proteins);
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <img src={image_large} alt={name} />
      <Paragraph className='text-center font-bold' size='medium'>
        {name}
      </Paragraph>
      <div className='flex flex-row flex-nowrap gap-6 justify-center items-center'>
        {details.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-2 justify-between h-14'
          >
            <Paragraph variant='inactive' size='small'>
              {item.label}
            </Paragraph>
            <Paragraph variant='inactive'>{item.value}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

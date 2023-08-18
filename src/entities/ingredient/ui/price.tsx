import { cn } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import type { IngredientPriceProps } from '../model';

export const IngredientPrice: React.FC<IngredientPriceProps> = ({
  value,
  digitsSize = 'medium',
  className,
}) => {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Paragraph font='digits' size={digitsSize}>
        {value}
      </Paragraph>
      <iconsMap.PriceIcon />
    </span>
  );
};

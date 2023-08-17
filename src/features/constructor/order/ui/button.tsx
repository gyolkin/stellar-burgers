import { selectConstructor } from '@/entities/constructor';
import { useAppSelector } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Button } from '@/shared/ui';

export const OrderButton: React.FC = () => {
  const { bun, ingredients } = useAppSelector(selectConstructor);
  return (
    <Button disabled={!bun || ingredients.length < 1}>
      {constantsMap.texts.constructorOrderButton}
    </Button>
  );
};

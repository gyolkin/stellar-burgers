import { useRef } from 'react';
import { TypeTabs } from '@/features/ingredient/tabs';
import {
  useGetIngredientsQuery,
  type IngredientType,
  IngredientList,
} from '@/entities/ingredient';
import { constantsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import { IngredientDetails } from './card';
import { createSections } from './utils';

export const IngredientsContainer: React.FC = () => {
  const { data } = useGetIngredientsQuery();
  const sections = createSections(data!);
  const tabsConnectionRef = useRef<HTMLDivElement>(null);

  return (
    <IngredientList
      tabsSlot={<TypeTabs containerRef={tabsConnectionRef} />}
      containerRef={tabsConnectionRef}
    >
      {Object.entries(sections).map(([type, ingredients]) => (
        <section id={type} key={type}>
          <Paragraph size='medium' weight='bold'>
            {constantsMap.ingredients.types[type as IngredientType]}
          </Paragraph>
          <div className='flex flex-row flex-wrap gap-6 ml-4 my-6'>
            {ingredients.map((item) => (
              <IngredientDetails key={item._id} ingredient={item} />
            ))}
          </div>
        </section>
      ))}
    </IngredientList>
  );
};

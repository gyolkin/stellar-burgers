import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TypeTabs } from '@/features/ingredient/tabs';
import {
  useGetIngredientsQuery,
  type IngredientType,
  IngredientList,
} from '@/entities/ingredient';
import { constantsMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import { createSections } from '../lib';
import { IngredientDetails } from './card';

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
            {constantsMap.types[type as IngredientType]}
          </Paragraph>
          <div className='flex flex-row flex-wrap gap-6 ml-4 my-6'>
            {ingredients.map((item) => (
              <IngredientDetails key={uuidv4()} ingredient={item} />
            ))}
          </div>
        </section>
      ))}
    </IngredientList>
  );
};

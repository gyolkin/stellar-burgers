import { useRef } from 'react';
import { TypeTabs } from '@/features/ingredient/tabs';
import {
  useGetIngredientsQuery,
  type IngredientType,
} from '@/entities/ingredient';
import { constantsMap } from '@/shared/model';
import { Heading, Paragraph } from '@/shared/ui';
import { IngredientDetails } from './card';
import { createSections } from './utils';

export const IngredientsContainer: React.FC = () => {
  const { mainText } = constantsMap.widgets.ingredientsContainer;
  const { types } = constantsMap.entities.ingredient;
  const { data } = useGetIngredientsQuery();
  const sections = createSections(data!);
  const tabsConnectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex flex-col lg:basis-1/2 lg:gap-4'>
      <Heading className='text-center lg:text-left'>{mainText}</Heading>
      <TypeTabs containerRef={tabsConnectionRef} />
      <div
        ref={tabsConnectionRef}
        className='overflow-x-hidden overflow-y-auto scroll-smooth max-h-[65vh] px-2 lg:px-0'
      >
        {Object.entries(sections).map(([type, ingredients]) => (
          <section id={type} key={type}>
            <Paragraph size='medium' weight='bold'>
              {types[type as IngredientType]}
            </Paragraph>
            <div className='flex flex-row flex-wrap gap-6 ml-4 my-6'>
              {ingredients.map((item) => (
                <IngredientDetails key={item._id} ingredient={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

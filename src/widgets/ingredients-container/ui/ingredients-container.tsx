import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IngredientDetails } from '@/widgets/ingredient-details';
import { TypeTabs } from '@/features/ingredient/tabs';
import {
  useGetIngredientsQuery,
  type IngredientType,
} from '@/entities/ingredient';
import { constantsMap } from '@/shared/model';
import { Heading, Paragraph, FlexContainer } from '@/shared/ui';
import { createSections } from '../lib';

export const IngredientsContainer = () => {
  const { data } = useGetIngredientsQuery();
  const sections = createSections(data!.data);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <FlexContainer variant='colStart' className='lg:basis-1/2 lg:gap-4'>
      <Heading className='text-center lg:text-left'>
        {constantsMap.texts.homeAction}
      </Heading>
      <TypeTabs containerRef={containerRef} />
      <div
        ref={containerRef}
        className='overflow-x-hidden overflow-y-auto scroll-smooth max-h-[65vh] px-2 lg:px-0'
      >
        {Object.entries(sections).map(([type, ingredients]) => (
          <section id={type} key={type}>
            <Paragraph size='medium' weight='bold'>
              {constantsMap.types[type as IngredientType]}
            </Paragraph>
            <FlexContainer variant='rowStart' className='gap-6 ml-4 my-6'>
              {ingredients.map((item) => (
                <IngredientDetails key={uuidv4()} ingredient={item} />
              ))}
            </FlexContainer>
          </section>
        ))}
      </div>
    </FlexContainer>
  );
};

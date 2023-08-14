import { useRef } from 'react';
import { TypeTabs } from '@/features/tabs';
import {
  useGetIngredientsQuery,
  IngredientDetail,
  type IngredientType,
} from '@/entities/ingredients';
import { constantsMap } from '@/shared/model';
import { Heading, Paragraph, FlexContainer } from '@/shared/ui';
import { createSections } from '../lib';

export const IngredientsContainer = () => {
  const { data } = useGetIngredientsQuery();
  const sections = createSections(data!.data);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <FlexContainer variant="colStart" className='lg:basis-1/2 lg:gap-4'>
      <Heading className='text-center lg:text-left'>{constantsMap.texts.homeAction}</Heading>
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
            <FlexContainer variant="rowStart" className='gap-6 ml-4 my-6'>
              {ingredients.map((item) => (
                <IngredientDetail
                  key={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </FlexContainer>
          </section>
        ))}
      </div>
    </FlexContainer>
  );
};

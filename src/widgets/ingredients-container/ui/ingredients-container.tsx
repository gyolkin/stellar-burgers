import { useRef } from 'react';
import { TypeTabs } from '@/features/tabs';
import {
  useGetIngredientsQuery,
  IngredientDetail,
  type IngredientType,
} from '@/entities/ingredients';
import { constantsMap } from '@/shared/model';
import { Heading, Paragraph } from '@/shared/ui';
import { createSections } from '../lib';

export const IngredientsContainer = () => {
  const { data } = useGetIngredientsQuery();
  const sections = createSections(data!.data);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='w-full lg:w-1/2 lg:h-[65vh]'>
      <Heading className='my-5'>{constantsMap.texts.homeAction}</Heading>
      <TypeTabs containerRef={containerRef} />
      <div
        ref={containerRef}
        className='overflow-x-hidden overflow-y-auto scroll-smooth h-full'
      >
        {Object.entries(sections).map(([type, ingredients]) => (
          <section id={type} key={type}>
            <Paragraph size='medium' weight='bold'>
              {constantsMap.types[type as IngredientType]}
            </Paragraph>
            <div className='flex flex-row flex-wrap gap-6 ml-4 my-6'>
              {ingredients.map((item) => (
                <IngredientDetail
                  key={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

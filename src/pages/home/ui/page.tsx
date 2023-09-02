import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { constantsMap } from '@/shared/model';
import { Heading } from '@/shared/ui';
import { ConstructorContainer } from './constructor';
import { IngredientContainer } from './ingredients';

export const HomePage: React.FC = () => {
  const { mainText } = constantsMap.pages.home;
  return (
    <DndProvider backend={HTML5Backend}>
      <Heading className='text-center lg:text-left'>{mainText}</Heading>
      <div className='flex flex-row flex-wrap lg:gap-10 lg:flex-nowrap'>
        <div className='flex flex-col w-full lg:basis-1/2'>
          <IngredientContainer />
        </div>
        <div className='flex flex-col justify-between w-full lg:basis-1/2 lg:pt-10'>
          <ConstructorContainer />
        </div>
      </div>
    </DndProvider>
  );
};

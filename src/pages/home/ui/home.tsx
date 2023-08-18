import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ConstructorContainer } from '@/widgets/constructor-container';
import { IngredientsContainer } from '@/widgets/ingredients-container';

export const HomePage: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-row flex-wrap lg:gap-10 lg:flex-nowrap'>
        <IngredientsContainer />
        <ConstructorContainer />
      </div>
    </DndProvider>
  );
};

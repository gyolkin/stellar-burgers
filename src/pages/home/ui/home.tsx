import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ConstructorContainer } from '@/widgets/constructor-container';
import { IngredientsContainer } from '@/widgets/ingredients-container';
import { FlexContainer } from '@/shared/ui';

export const HomePage: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <FlexContainer variant='rowStart' className='lg:gap-10 lg:flex-nowrap'>
        <IngredientsContainer />
        <ConstructorContainer />
      </FlexContainer>
    </DndProvider>
  );
};

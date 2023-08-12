import { IngredientsContainer } from '@/widgets/ingredients-container';
import { Heading } from '@/shared/ui';

export const HomePage = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-6 md:flex-nowrap md:gap-10'>
      <div className='w-full md:w-1/2 md:h-[75vh]'>
        <Heading className='mt-5 mb-10'>Соберите бургер</Heading>
        <IngredientsContainer />
      </div>
      <div className='w-full md:w-1/2'>empty cont</div>
    </div>
  );
};

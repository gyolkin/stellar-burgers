import { IngredientsContainer } from '@/widgets/ingredients-container';

export const HomePage = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-6 lg:flex-nowrap lg:gap-10'>
      <IngredientsContainer />
      <div className='w-full lg:w-1/2'>empty cont</div>
    </div>
  );
};

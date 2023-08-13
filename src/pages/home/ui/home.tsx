import { IngredientsContainer } from '@/widgets/ingredients-container';
import { constantsMap } from '@/shared/model';
import { Heading } from '@/shared/ui';

export const HomePage = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-6 md:flex-nowrap md:gap-10'>
      <div className='w-full md:w-1/2 md:h-[65vh]'>
        <Heading className='my-5'>
          {constantsMap.texts.homeAction}
        </Heading>
        <IngredientsContainer />
      </div>
      <div className='w-full md:w-1/2'>empty cont</div>
    </div>
  );
};

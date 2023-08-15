import { Paragraph } from '@/shared/ui';

export const Counter: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className='absolute right-0 top-0 min-w-[16px] h-[32px] px-2 flex items-center justify-center bg-accent rounded-full'>
      <Paragraph font='digits' size='medium'>
        {value}
      </Paragraph>
    </div>
  );
};

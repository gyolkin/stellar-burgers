import { cn } from '@/shared/lib';
import { Paragraph } from '../typography';
import { LoaderProps } from './types';

export const Loader: React.FC<LoaderProps> = ({
  text,
  screen = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center animate-pulse gap-2 lg:gap-4',
        screen && 'h-screen',
        className,
      )}
    >
      <img src='/img/slogo.png' className='h-24 w-24' alt='preloader' />
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

import { cn } from '@/shared/lib';
import slogo from '@/shared/ui/slogo.png';
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
      <img src={slogo} className='h-24 w-24' alt='preloader' />
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

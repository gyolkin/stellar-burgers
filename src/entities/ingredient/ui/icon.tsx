import { cn } from '@/shared/lib';

export const IngredientIcon: React.FC<{
  className?: string;
  image: string;
}> = ({ className, image }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gradient-to-r from-purple to-accent rounded-full w-12 h-12 lg:w-16 lg:h-16',
        className,
      )}
    >
      <img
        src={image}
        className='bg-dark rounded-full object-cover h-[44px] w-[44px] lg:w-[60px] lg:h-[60px]'
        alt='ingredient'
      />
    </div>
  );
};

import { useNavigate } from 'react-router-dom';
import { constantsMap, navigationMap } from '@/shared/model';
import { Paragraph, Button } from '@/shared/ui';

export const NotFoundPage: React.FC = () => {
  const { mainText, backButton } = constantsMap.pages.notFound;
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center gap-6 lg:gap-10 h-screen'>
      <Paragraph font='digits' size='heading' className='text-shadow'>
        404
      </Paragraph>
      <Paragraph size='medium' className='text-center'>
        {mainText}
      </Paragraph>
      <Button onClick={() => navigate(navigationMap.home)}>{backButton}</Button>
    </div>
  );
};

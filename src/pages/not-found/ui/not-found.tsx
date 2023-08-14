import { constantsMap } from '@/shared/model';
import { Paragraph, FlexContainer, Button } from '@/shared/ui';
import { useBackButton } from '../lib';

export const NotFoundPage = () => {
  const clickHandler = useBackButton();
  return (
    <FlexContainer className='gap-6 lg:gap-10 h-screen'>
      <Paragraph font='digits' size='heading' className='text-shadow'>
        404
      </Paragraph>
      <Paragraph size='medium' className='text-center'>
        {constantsMap.texts.notFoundInfo}
      </Paragraph>
      <Button onClick={clickHandler}>
        {constantsMap.texts.notFoundButton}
      </Button>
    </FlexContainer>
  );
};

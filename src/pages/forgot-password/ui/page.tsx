import { Link } from 'react-router-dom';
import { ForgotPasswordForm } from '@/features/auth/forgot-password';
import { constantsMap, navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';

export const ForgotPasswordPage: React.FC = () => {
  const content = constantsMap.pages.forgotPassword;
  return (
    <div className='flex flex-col items-center pt-2 lg:pt-20'>
      <Paragraph size='medium' className='font-bold pb-4'>
        {content.mainText}
      </Paragraph>
      <ForgotPasswordForm />
      <div className='flex flex-col items-center gap-2 pt-5 lg:pt-10'>
        <Paragraph variant='inactive'>
          {content.rememberPasswordText}{' '}
          <Link to={navigationMap.register} className='text-accent'>
            {content.rememberPasswordLink}
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};

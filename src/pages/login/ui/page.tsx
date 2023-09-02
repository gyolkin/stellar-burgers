import { Link } from 'react-router-dom';
import { LoginForm } from '@/features/auth/login';
import { constantsMap, navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';

export const LoginPage: React.FC = () => {
  const content = constantsMap.pages.login;
  return (
    <div className='flex flex-col items-center pt-2 lg:pt-20'>
      <Paragraph size='medium' className='font-bold pb-4'>
        {content.mainText}
      </Paragraph>
      <LoginForm />
      <div className='flex flex-col items-center gap-2 pt-5 lg:pt-10'>
        <Paragraph variant='inactive'>
          {content.registerText}{' '}
          <Link to={navigationMap.register} className='text-accent'>
            {content.registerLink}
          </Link>
        </Paragraph>
        <Paragraph variant='inactive'>
          {content.forgotPasswordText}{' '}
          <Link to={navigationMap.forgotPassword} className='text-accent'>
            {content.forgotPasswordLink}
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};

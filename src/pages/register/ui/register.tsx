import { Link } from 'react-router-dom';
import { RegisterForm } from '@/features/auth/register';
import { constantsMap, navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';

export const RegisterPage: React.FC = () => {
  const { loginLink, loginText, mainText } = constantsMap.pages.register;
  return (
    <div className='flex flex-col items-center pt-2 lg:pt-20'>
      <Paragraph size='medium' className='font-bold pb-4'>
        {mainText}
      </Paragraph>
      <RegisterForm />
      <div className='flex flex-col items-center gap-2 pt-5 lg:pt-10'>
        <Paragraph variant='inactive'>
          {loginText}{' '}
          <Link to={navigationMap.login} className='text-accent'>
            {loginLink}
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};

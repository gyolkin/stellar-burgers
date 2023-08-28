import { Link, Navigate } from 'react-router-dom';
import { ResetPasswordForm } from '@/features/auth/reset-password';
import { selectIsForgotPassword } from '@/entities/user';
import { useAppSelector } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { Paragraph } from '@/shared/ui';

export const ResetPasswordPage: React.FC = () => {
  const content = constantsMap.pages.resetPassword;
  const isAllowed = useAppSelector(selectIsForgotPassword);
  if (!isAllowed) {
    return <Navigate to={navigationMap.home} replace />;
  }
  return (
    <div className='flex flex-col items-center pt-2 lg:pt-20'>
      <Paragraph size='medium' className='font-bold pb-4'>
        {content.mainText}
      </Paragraph>
      <ResetPasswordForm />
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

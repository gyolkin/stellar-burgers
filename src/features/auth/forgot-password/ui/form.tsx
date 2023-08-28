import { useNavigate } from 'react-router-dom';
import {
  usePostForgotPasswordMutation,
  type UserObject,
} from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { Input, Button, Paragraph } from '@/shared/ui';

export const ForgotPasswordForm: React.FC = () => {
  const { continueButton } = constantsMap.features.auth.forgotPassword;
  const navigate = useNavigate();
  const [forgotPassword, { isLoading, isError, error }] =
    usePostForgotPasswordMutation();
  const { values, handleChange } = useForm<Pick<UserObject, 'email'>>({
    email: '',
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await forgotPassword(values).unwrap();
    if (res) {
      navigate(navigationMap.resetPassword, { replace: true });
    }
  };
  return (
    <form
      className={cn(
        'flex flex-col items-center gap-2 lg:gap-5',
        isLoading && 'animate-pulse',
      )}
      onSubmit={handleSubmit}
    >
      {isError && error && (
        <Paragraph variant='error'>{getApiError(error)}</Paragraph>
      )}
      <Input
        value={values.email}
        type='email'
        name='email'
        placeholder='Укажите E-mail'
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button type='submit' className='lg:max-w-xs' disabled={isLoading}>
        {continueButton}
      </Button>
    </form>
  );
};

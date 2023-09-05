import { useNavigate } from 'react-router-dom';
import { usePostForgotPasswordMutation } from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { Input, Button, Alert } from '@/shared/ui';
import { initialData } from '../model';

export const ForgotPasswordForm: React.FC = () => {
  const { continueButton, errorHeadingText } =
    constantsMap.features.auth.forgotPassword;
  const navigate = useNavigate();
  const [forgotPassword, { isLoading, isError, error }] =
    usePostForgotPasswordMutation();
  const { values, handleChange } = useForm(initialData);
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
        <Alert
          variant='error'
          icon='ErrorIcon'
          heading={errorHeadingText}
          text={getApiError(error)}
        />
      )}
      <Input
        value={values.email}
        type='email'
        name='email'
        placeholder='Укажите E-mail'
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button type='submit' disabled={isLoading}>
        {continueButton}
      </Button>
    </form>
  );
};

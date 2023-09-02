import { useNavigate } from 'react-router-dom';
import { PasswordInput, usePostResetPasswordMutation } from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { Input, Button, Alert } from '@/shared/ui';
import { initialData } from '../model';

export const ResetPasswordForm: React.FC = () => {
  const { resetButton, errorHeadingText } =
    constantsMap.features.auth.resetPassword;
  const navigate = useNavigate();
  const [resetPassword, { isLoading, isError, error }] =
    usePostResetPasswordMutation();
  const { values, handleChange } = useForm(initialData);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await resetPassword(values).unwrap();
    if (res) {
      navigate(navigationMap.login);
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
      <PasswordInput
        value={values.password}
        onChange={handleChange}
        disabled={isLoading}
        placeholder='Введите новый пароль'
      />
      <Input
        value={values.token}
        type='text'
        name='token'
        placeholder='Введите код из письма'
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button type='submit' disabled={isLoading}>
        {resetButton}
      </Button>
    </form>
  );
};

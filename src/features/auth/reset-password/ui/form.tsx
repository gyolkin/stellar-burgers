import { useNavigate } from 'react-router-dom';
import { PasswordInput, usePostResetPasswordMutation } from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { Input, Button, Paragraph } from '@/shared/ui';

export const ResetPasswordForm: React.FC = () => {
  const { resetButton } = constantsMap.features.auth.resetPassword;
  const navigate = useNavigate();
  const [resetPassword, { isLoading, isError, error }] =
    usePostResetPasswordMutation();
  const { values, handleChange } = useForm<{ password: string; token: string }>(
    {
      password: '',
      token: '',
    },
  );
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
        <Paragraph variant='error'>{getApiError(error)}</Paragraph>
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
      <Button type='submit' className='lg:max-w-xs' disabled={isLoading}>
        {resetButton}
      </Button>
    </form>
  );
};

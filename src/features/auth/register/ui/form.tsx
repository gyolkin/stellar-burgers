import { usePostRegisterMutation, PasswordInput } from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Input, Button, Alert } from '@/shared/ui';
import { initialData } from '../model';

export const RegisterForm: React.FC = () => {
  const { registerButton, errorHeadingText } =
    constantsMap.features.auth.register;
  const [register, { isLoading, isError, error }] = usePostRegisterMutation();
  const { values, handleChange } = useForm(initialData);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(values);
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
        value={values.name}
        type='text'
        name='name'
        placeholder='Имя'
        onChange={handleChange}
        disabled={isLoading}
      />
      <Input
        value={values.email}
        type='email'
        name='email'
        placeholder='E-mail'
        onChange={handleChange}
        disabled={isLoading}
      />
      <PasswordInput
        value={values.password}
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button type='submit' disabled={isLoading}>
        {registerButton}
      </Button>
    </form>
  );
};

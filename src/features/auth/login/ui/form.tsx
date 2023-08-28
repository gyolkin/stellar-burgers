import {
  type LoginFormData,
  usePostLoginMutation,
  PasswordInput,
} from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Input, Button, Paragraph } from '@/shared/ui';
import { initialData } from '../model';

export const LoginForm: React.FC = () => {
  const { loginButton } = constantsMap.features.auth.login;
  const [login, { isLoading, isError, error }] = usePostLoginMutation();
  const { values, handleChange } = useForm<LoginFormData>(initialData);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(values);
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
        placeholder='E-mail'
        onChange={handleChange}
        disabled={isLoading}
      />
      <PasswordInput
        value={values.password}
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button type='submit' className='lg:max-w-xs' disabled={isLoading}>
        {loginButton}
      </Button>
    </form>
  );
};

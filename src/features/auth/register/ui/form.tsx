import {
  usePostRegisterMutation,
  PasswordInput,
  type RegisterFormData,
} from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Input, Button, Paragraph } from '@/shared/ui';

export const RegisterForm: React.FC = () => {
  const { registerLink } = constantsMap.features.auth.register;
  const [register, { isLoading, isError: isFormError, error: formError }] =
    usePostRegisterMutation();
  const { values, handleChange } = useForm<RegisterFormData>({
    email: '',
    password: '',
    name: '',
  });
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
      {isFormError && formError && (
        <Paragraph variant='error'>{getApiError(formError)}</Paragraph>
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
      <Button type='submit' className='lg:max-w-xs' disabled={isLoading}>
        {registerLink}
      </Button>
    </form>
  );
};

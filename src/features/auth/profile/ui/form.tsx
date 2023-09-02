import { usePatchMeMutation, EditInput } from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Alert, Button, Paragraph } from '@/shared/ui';
import { useDataHasChanged } from '../lib';
import { useProfileFormInitialData } from '../model';

export const ProfileForm: React.FC = () => {
  const content = constantsMap.features.auth.profile;
  const [me, { isLoading, isError, error, isSuccess }] = usePatchMeMutation();
  const formData = useProfileFormInitialData();
  const { values, handleChange } = useForm(formData);
  const hasChanged = useDataHasChanged(formData, values);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    me(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col items-center gap-2 lg:gap-5',
        isLoading && 'animate-pulse',
      )}
    >
      {isError && error && (
        <Alert
          variant='error'
          icon='ErrorIcon'
          heading={content.errorHeadingText}
          text={getApiError(error)}
        />
      )}
      {isLoading && <Paragraph>{content.loadingText}</Paragraph>}
      {isSuccess && (
        <Alert variant='success' icon='TickIcon' text={content.successText} />
      )}
      <EditInput
        value={values.name}
        type='text'
        name='name'
        placeholder='Имя'
        onChange={handleChange}
      />
      <EditInput
        value={values.email}
        type='email'
        name='email'
        placeholder='E-mail'
        onChange={handleChange}
      />
      <EditInput
        value={values.password}
        type='password'
        name='password'
        placeholder='Пароль'
        onChange={handleChange}
      />
      {hasChanged && <Button type='submit'>{content.changeButton}</Button>}
    </form>
  );
};

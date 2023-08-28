import {
  type UserObjectWithPassword,
  usePatchMeMutation,
  useGetMeQuery,
  EditInput,
} from '@/entities/user';
import { cn, getApiError, useForm } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Button, Paragraph } from '@/shared/ui';
import { useDataHasChanged } from '../lib';
import { getInitialData } from '../model';

export const ProfileForm: React.FC = () => {
  const { changeButton, loadingText, successText } =
    constantsMap.features.auth.profile;
  const [me, { isLoading, isError, error, isSuccess }] = usePatchMeMutation();
  const { data } = useGetMeQuery();
  const formData = getInitialData(data!);
  const { values, handleChange } = useForm<UserObjectWithPassword>(formData);
  const hasChanged = useDataHasChanged(formData, values);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    me(values);
  };
  return (
    <form
      className={cn(
        'flex flex-col items-center gap-2 lg:gap-5',
        isLoading && 'animate-pulse',
      )}
    >
      {isError && error && (
        <Paragraph variant='error'>{getApiError(error)}</Paragraph>
      )}
      {isLoading && <Paragraph>{loadingText}</Paragraph>}
      {isSuccess && <Paragraph variant='success'>{successText}</Paragraph>}
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
      {hasChanged && <Button onClick={handleSubmit}>{changeButton}</Button>}
    </form>
  );
};

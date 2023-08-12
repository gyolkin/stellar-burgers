import { useState } from 'react';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useForm = <FormData>(inputValues: FormData) => {
  const [values, setValues] = useState<FormData>(inputValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
};

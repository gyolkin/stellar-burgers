import { useState } from 'react';
import { Input } from '@/shared/ui';
import { PasswordInputProps } from '../model';

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      name='password'
      placeholder='Пароль'
      icon={showPassword ? 'PasswordHideIcon' : 'PasswordIcon'}
      onIconClick={() => setShowPassword(!showPassword)}
      {...props}
    />
  );
};

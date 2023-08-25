export type UserObject = {
  email: string;
  name: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = LoginFormData & {
  name: string;
};

export type TokenObject = {
  token: string;
};

export type AuthServerAnswer = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserObject;
};

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: 'PasswordIcon' | 'PasswordHideIcon';
  error?: boolean;
  errorText?: string;
  onIconClick?: () => void;
}

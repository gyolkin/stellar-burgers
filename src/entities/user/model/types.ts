export type UserObject = {
  email: string;
  name: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type UserObjectWithPassword = UserObject & {
  password: string;
};

export type PasswordWithToken = {
  password: string;
  token: string;
};

export type TokenObject = {
  accessToken: string;
  refreshToken: string;
};

export type UserWithTokens = TokenObject & {
  user: UserObject;
};

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: 'PasswordIcon' | 'PasswordHideIcon';
  error?: boolean;
  errorText?: string;
  onIconClick?: () => void;
}

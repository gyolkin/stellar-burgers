export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: 'PasswordIcon' | 'EditIcon' | 'PasswordHideIcon';
  error?: boolean;
  errorText?: string;
  onIconClick?: () => void;
}

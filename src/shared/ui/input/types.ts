export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: 'PasswordIcon' | 'EditIcon';
  error?: boolean;
  errorText?: string;
  onIconClick?: () => void;
}

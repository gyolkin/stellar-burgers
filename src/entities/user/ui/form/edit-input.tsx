import { useState } from 'react';
import { Input } from '@/shared/ui';
import { CustomInputProps } from '../../model';

export const EditInput: React.FC<CustomInputProps> = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <Input
      icon='EditIcon'
      onIconClick={() => setIsEditable(true)}
      onBlur={() => setIsEditable(false)}
      disabled={!isEditable}
      {...props}
    />
  );
};

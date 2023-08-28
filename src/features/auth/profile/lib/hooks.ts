import { useEffect, useState } from 'react';
import type { UserObjectWithPassword } from '@/entities/user';

export const useDataHasChanged = (
  initialData: UserObjectWithPassword,
  currentData: UserObjectWithPassword,
) => {
  const [hasChanged, setHasChanged] = useState(false);
  useEffect(() => {
    if (JSON.stringify(initialData) !== JSON.stringify(currentData)) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  }, [initialData, currentData]);
  return hasChanged;
};

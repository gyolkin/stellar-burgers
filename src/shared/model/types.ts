import type { Location } from 'react-router-dom';

export interface LocationState {
  background?: Location;
  from?: Location;
}

export interface ApiError {
  status: number;
  data: { message: string };
}

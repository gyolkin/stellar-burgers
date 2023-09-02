import { DetailedOrderObject } from '@/entities/order';

export interface OrderCardProps
  extends Pick<
    DetailedOrderObject,
    'name' | 'number' | 'status' | 'createdAt' | 'ingredients'
  > {}

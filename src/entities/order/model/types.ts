export interface OrderObject {
  name: string;
  order: { number: number };
}

export interface DetailedOrderObject {
  ingredients: Array<IngredientID>;
  _id: OrderID;
  name: string;
  status: 'done' | 'pending' | 'created';
  number: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type OrderList = {
  orders: Array<DetailedOrderObject>;
  total: number;
  totalToday: number;
};

export interface OrderProps
  extends Pick<DetailedOrderObject, 'name' | 'number' | 'status'> {
  date: Timestamp;
  priceSlot: React.ReactNode;
  ingredientSlot: React.ReactNode;
}

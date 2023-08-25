export interface OrderObject {
  name: string;
  order: { number: number };
}

export interface TransformedOrderObject {
  name: string;
  number: number;
}

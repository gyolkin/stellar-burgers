import React from 'react';
import type { ConnectDragSource } from 'react-dnd';

export type IngredientType = 'bun' | 'sauce' | 'main';

export type IngredientObject = {
  _id: string;
  name: string;
  type: IngredientType;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type GetIngredientsServerAnswer = {
  success: boolean;
  data: Array<IngredientObject>;
};

export interface IngredientListProps extends React.PropsWithChildren {
  tabsSlot?: React.ReactNode;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export interface IngredientPriceProps {
  value: number;
  digitsSize?: 'medium' | 'large';
  className?: string;
}

export interface IngredientProps
  extends Pick<IngredientObject, 'image' | 'name'> {
  counterSlot?: React.ReactNode;
  removeSlot?: React.ReactNode;
  addSlot?: React.ReactNode;
  priceSlot?: React.ReactNode;
  dragRef?: ConnectDragSource;
}

import React from 'react';
import type { ConnectDragSource } from 'react-dnd';

export type IngredientType = 'bun' | 'sauce' | 'main';

export type IngredientObject = {
  _id: IngredientID;
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
  uniqueId?: UniqueIngredientID;
};

export interface IngredientPriceProps {
  value: number;
  digitsSize?: 'medium' | 'large';
  className?: string;
}

export interface IngredientProps
  extends Pick<IngredientObject, '_id' | 'image' | 'name' | 'price'> {
  counterSlot?: React.ReactNode;
  removeSlot?: React.ReactNode;
  addSlot?: React.ReactNode;
  dragRef?: ConnectDragSource;
}

export interface ConstructorIngredientProps
  extends Pick<IngredientObject, 'image' | 'name' | '_id'> {
  priceSlot: React.ReactNode;
  actionSlot: React.ReactNode;
  dragSlot: React.ReactNode;
  dragRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

export interface OrderIngredientProps
  extends Pick<IngredientObject, 'image_mobile' | 'name' | 'price'> {
  count: number;
}

export interface IngredientModalProps
  extends Pick<
    IngredientObject,
    'image_large' | 'name' | 'calories' | 'carbohydrates' | 'fat' | 'proteins'
  > {}

export type UseIngredientsOptions = {
  ids?: Array<
    IngredientID | { _id: IngredientID; uniqueId: UniqueIngredientID }
  >;
  splitByType?: boolean;
  computeCount?: boolean;
};

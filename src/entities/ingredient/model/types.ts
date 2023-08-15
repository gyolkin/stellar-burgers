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

export type IngredientProps = Pick<
  IngredientObject,
  'image' | 'name' | 'price'
> & { counterSlot?: React.ReactNode };

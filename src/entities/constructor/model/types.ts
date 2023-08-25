// eslint-disable-next-line boundaries/element-types
import type { IngredientObject } from '@/entities/ingredient';
/* 
FSD prohibits importing content within the same layer, however in this case the ConstructorElementProps type
directly depends on the IngredientObject type from entities/ingredient.
*/

export interface ConstructorIngredientObject
  extends Pick<IngredientObject, 'image' | 'name' | 'price' | 'type' | '_id'> {
  constructorId: string;
}

// export IngredientObject for using on the level of constructor slice
export type { IngredientObject };

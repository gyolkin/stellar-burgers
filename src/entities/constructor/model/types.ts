import type { ConnectDropTarget } from 'react-dnd';
// eslint-disable-next-line boundaries/element-types
import type { IngredientObject } from '@/entities/ingredient';
/* 
FSD prohibits importing content within the same layer, however in this case the ConstructorElementProps type
directly depends on the IngredientObject type from entities/ingredient.
*/

export interface ConstructorElementProps
  extends Pick<IngredientObject, 'image' | 'name' | 'price'> {
  iconSlot: React.ReactNode;
  className?: string;
}

export interface ConstructorListProps extends React.PropsWithChildren {
  dropTarget: ConnectDropTarget;
  hoverClass?: boolean | string;
  priceSlot: React.ReactNode;
}

// export IngredientObject for using on the level of constructor slice
export type { IngredientObject };

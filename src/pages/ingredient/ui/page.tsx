import { useLocation, useParams, Navigate, Link } from 'react-router-dom';
import { IngredientModal, ingredientsApi } from '@/entities/ingredient';
import {
  type LocationState,
  iconsMap,
  constantsMap,
  navigationMap,
} from '@/shared/model';
import { Paragraph } from '@/shared/ui';

export const IngredientPage: React.FC = () => {
  const { types } = constantsMap.entities.ingredient;
  const location = useLocation();
  const background = (location.state as LocationState)?.background;
  const { id } = useParams();
  const { data } = ingredientsApi.endpoints.getIngredients.useQueryState();
  const ingredient = data!.find((item) => item._id === id); // OPTIMIZATION NEEDED

  if (!ingredient) {
    return <Navigate to={navigationMap.error404} replace />;
  }

  return (
    <>
      {!background && (
        <div className='inline-flex items-center gap-2 p-2 lg:p-0'>
          <Link className='text-inactive' to={navigationMap.home}>
            <iconsMap.BackIcon />
          </Link>
          <Paragraph variant='inactive' size='small'>
            {types[ingredient.type]} / {ingredient.name}
          </Paragraph>
        </div>
      )}
      <IngredientModal
        name={ingredient.name}
        image_large={ingredient.image_large}
        fat={ingredient.fat}
        calories={ingredient.calories}
        carbohydrates={ingredient.carbohydrates}
        proteins={ingredient.proteins}
      />
    </>
  );
};

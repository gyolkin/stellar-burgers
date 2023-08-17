export const selectConstructor = (state: RootState) => state.constructorContent;

export const selectIngredientCountById =
  (ingredientId: string) => (state: RootState) => {
    if (state.constructorContent.bun?._id === ingredientId) {
      return 2;
    }
    const count = state.constructorContent.ingredients.filter(
      (ingredient) => ingredient._id === ingredientId,
    ).length;
    return count;
  };

export const selectTotalPrice = (state: RootState) => {
  const ingredientsPrice = state.constructorContent.ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0,
  );
  const bunPrice = state.constructorContent.bun
    ? state.constructorContent.bun.price * 2
    : 0;
  return ingredientsPrice + bunPrice;
};

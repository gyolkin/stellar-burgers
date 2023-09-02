export const selectConstructor = (state: RootState) => state.constructorContent;

export const selectIngredientCountById =
  (ingredientId: string) => (state: RootState) => {
    if (state.constructorContent.bun === ingredientId) {
      return 2;
    }
    const count = state.constructorContent.ingredients.filter(
      (ingredient) => ingredient._id === ingredientId,
    ).length;
    return count;
  };

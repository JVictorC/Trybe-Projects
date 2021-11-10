export const fetchIntensByIngridientsCocktail = (ingridient) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingridient}`)
    .then((response) => response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const fetchIntensByIngridientsMeal = async (ingredient) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((r) => r
      .json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

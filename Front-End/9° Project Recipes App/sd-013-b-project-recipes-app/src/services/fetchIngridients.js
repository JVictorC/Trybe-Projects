export const fetchIngridientsCocktail = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const fetchIngridientsMeal = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((r) => r
      .json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

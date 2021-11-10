const fetchMealsItensByArea = (area) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((r) => r
      .json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default fetchMealsItensByArea;

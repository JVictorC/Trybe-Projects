const fetchAreasMeal = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((r) => r
      .json()
      .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default fetchAreasMeal;

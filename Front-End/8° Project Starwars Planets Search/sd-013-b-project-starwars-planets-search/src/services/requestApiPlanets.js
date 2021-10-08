// Metodo de Requisição inspirado no https://github.com/tryber/sd-013-b-live-lectures/blob/lecture/18.1/iss-location/src/services/issAPI.js

const requestApiPlanets = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  .then((response) => (
    response.json()
      .then((json) => (
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      ))
  ));

export default requestApiPlanets;

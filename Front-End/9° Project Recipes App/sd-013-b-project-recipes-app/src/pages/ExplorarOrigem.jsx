import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/footer';
import Header from '../components/header';
import fetchAreasMeal from '../services/fetchAreas';
import fetchMealsItensByArea from '../services/fetchItensByArea';
import { fetchMealsArray } from '../services/fetchItens';

const NUMBER_MAX_ELEMENT = 12;

export default function ExplorarOrigem() {
  const [InputsAreas, setInputsAreas] = useState([]);
  const [IntensForMap, setIntensForMap] = useState([]);
  const history = useHistory();

  const fetchInputs = useCallback(
    async () => {
      const { meals } = await fetchAreasMeal();
      const { meals: mealsItens } = await fetchMealsArray();
      setInputsAreas([{ strArea: 'All' }, ...meals]);
      setIntensForMap(mealsItens.slice(0, NUMBER_MAX_ELEMENT));
    },
    [],
  );

  useEffect(() => {
    fetchInputs();
  }, [fetchInputs]);

  const handleChangeSelectArea = async ({ target: { value } }) => {
    setIntensForMap([]);
    if (value === 'All') {
      const { meals } = await fetchMealsArray();
      setIntensForMap(meals.slice(0, NUMBER_MAX_ELEMENT));
    } else {
      const { meals } = await fetchMealsItensByArea(value);
      setIntensForMap(meals.slice(0, NUMBER_MAX_ELEMENT));
    }
  };

  const hanldeCLickDirect = (id) => {
    history.push('/');
    history.push(`/comidas/${id}`);
  };

  return (
    <div>
      <Header titlePage="Explorar Origem" hasSearchIcon />
      <form>
        <label htmlFor="areas">
          Selecione a Região Desejada:
          <select
            name="areas"
            id="areas"
            onChange={ handleChangeSelectArea }
            data-testid="explore-by-area-dropdown"
          >
            {
              InputsAreas.map(({ strArea }, index) => (
                <option
                  value={ strArea }
                  key={ index }
                  data-testid={ `${strArea}-option` }
                >
                  {strArea}
                </option>
              ))
            }
          </select>
        </label>
        <ul>
          {
            IntensForMap.map(({ strMeal, strMealThumb, idMeal }, index) => (
              <li
                key={ idMeal }
                style={ { margin: '25px' } }
                data-testid={ `${index}-recipe-card` }
                onClick={ () => hanldeCLickDirect(idMeal) }
                role="presentation"
              >
                <p data-testid={ `${index}-card-name` }>{strMeal}</p>
                <img
                  src={ strMealThumb }
                  alt={ strMeal }
                  style={ { width: '250px' } }
                  data-testid={ `${index}-card-img` }

                />
              </li>
            ))
          }
        </ul>
      </form>
      <Footer />
    </div>
  );
}

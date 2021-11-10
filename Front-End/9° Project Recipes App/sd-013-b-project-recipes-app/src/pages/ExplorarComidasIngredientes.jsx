import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchItensByIngridientsThunk } from '../redux/action';
import { fetchIngridientsMeal } from '../services/fetchIngridients';

const NUMBER_MAX_ELEMENT = 12;

export default function ExplorarComidasIngredientes() {
  const [IngridientsMeal, setIngridientsMeal] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const fetchItens = useCallback(
    async () => {
      const { meals } = await fetchIngridientsMeal();
      const firstTwelve = meals.slice(0, NUMBER_MAX_ELEMENT);
      setIngridientsMeal(firstTwelve);
    },
    [],
  );

  const handleClickDirect = async (ingridient) => {
    dispatch(fetchItensByIngridientsThunk(ingridient, 'meal'));
    history.push('/comidas');
  };

  useEffect(() => {
    fetchItens();
  }, [fetchItens]);

  return (
    <div>
      <Header titlePage="Explorar Ingredientes" />
      <ul className="container-main-list">
        {
          IngridientsMeal.map(({ strIngredient }, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => handleClickDirect(strIngredient) }
              role="presentation"
              className="container-main-ingridient"
            >
              <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
              <img
                data-testid={ `${index}-card-img` }
                src={
                  `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
                }
                alt={ strIngredient }
              />
            </li>
          ))
        }
      </ul>
      <Footer />
    </div>
  );
}

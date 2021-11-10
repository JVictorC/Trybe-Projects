import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchIngridientsCocktail } from '../services/fetchIngridients';
import { fetchItensByIngridientsThunk } from '../redux/action';

const NUMBER_MAX_ELEMENT = 12;

export default function ExplorarBebidasIngredientes() {
  const [IngridientsCocktail, setIngridientsCocktail] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchItens = useCallback(
    async () => {
      const { drinks } = await fetchIngridientsCocktail();
      const firstTwelve = drinks.slice(0, NUMBER_MAX_ELEMENT);
      setIngridientsCocktail(firstTwelve);
    },
    [],
  );

  useEffect(() => {
    fetchItens();
  }, [fetchItens]);

  const handleClickDirect = (ingridient) => {
    dispatch(fetchItensByIngridientsThunk(ingridient, 'drink'));
    history.push('/bebidas');
  };

  return (
    <div>
      <Header titlePage="Explorar Ingredientes" />
      <ul className="container-main-list">
        {
          IngridientsCocktail.map(({ strIngredient1 }, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => handleClickDirect(strIngredient1) }
              role="presentation"
              className="container-main-ingridient"

            >
              <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
              <img
                data-testid={ `${index}-card-img` }
                src={
                  `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`
                }
                alt={ strIngredient1 }
              />
            </li>
          ))
        }
      </ul>
      <Footer />
    </div>
  );
}

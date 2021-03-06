import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import Recomendations from './Recomendations';
import { fetchDetailsThunk } from '../../redux/action';
import ButtonsFavoriteAndShare from '../buttonsFavoriteAndShare';
import { getIngredientsAndMeasure } from '../../helpers/getIngredientsInArray';

export default function Details() {
  const { id } = useParams();
  const history = useHistory();
  const { location: { pathname } } = history;
  const [details, setDetails] = useState({
    loading: true,
    Top6: [],
    fav: false,
    ingredientsArray: {
      arrayIngredients: [],
      arrayMeasure: [],
    },
  });
  const detailsResult = useSelector((state) => state.detailsReducer.results);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname.includes('bebidas')) {
      dispatch(fetchDetailsThunk(id, 'cocktail'));
      setDetails((prevState) => ({ ...prevState, recipe: 'cocktail' }));
    }
    if (pathname.includes('comidas')) {
      dispatch(fetchDetailsThunk(id, 'meal'));
      setDetails((prevState) => ({ ...prevState, recipe: 'meal' }));
    }
  }, [details.recipe, dispatch, id, pathname]);

  useEffect(() => {
    if (detailsResult) {
      const { arrayIngredients, arrayMeasure } = getIngredientsAndMeasure(detailsResult);
      setDetails((prevState) => ({
        ...prevState,
        loading: false,
        ingredientsArray: { arrayIngredients, arrayMeasure },
      }));
    }
  }, [detailsResult]);

  function handleIngredients() {
    const ingredientsList = details.ingredientsArray.arrayIngredients
      .map((array, index) => (
        <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          {`${array} ${details.ingredientsArray.arrayMeasure[index]}`}
        </li>
      ));
    return ingredientsList;
  }

  function handleButton() {
    if (localStorage.getItem('inProgressRecipes')
      && localStorage.getItem('inProgressRecipes').includes(id)) {
      return 'Continuar Receita';
    }
    return 'Iniciar Receita';
  }

  function handleDetails() {
    if (details.recipe === 'cocktail') {
      const { strDrinkThumb, strCategory,
        strDrink, strInstructions, strAlcoholic, idDrink } = detailsResult;
      return (
        <div>
          <img
            className="img-details"
            data-testid="recipe-photo"
            alt={ strDrink }
            src={ `${strDrinkThumb}` }
          />
          <p data-testid="recipe-title">{strDrink}</p>
          <p data-testid="recipe-category">{strAlcoholic}</p>
          <ButtonsFavoriteAndShare testIdShare="share-btn" url={ `http://localhost:3000/bebidas/${idDrink}` } />
          <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
          {handleIngredients()}
          <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
          <Recomendations />
          <button
            type="button"
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
            onClick={ () => { history.push(`${pathname}/in-progress`); } }
          >
            {handleButton()}
          </button>
        </div>
      );
    }
    if (pathname.includes('comidas')) {
      const { strMealThumb, strCategory,
        strMeal, strInstructions, strYoutube, idMeal } = detailsResult;
      let embed = '';
      if (strYoutube) {
        const youtubeId = strYoutube.split('=');
        embed = `https://www.youtube.com/embed/${youtubeId[1]}`;
      }
      return (
        <div className="main-container-details">
          <img
            className="main-container-details"
            data-testid="recipe-photo"
            alt={ strMeal }
            src={ `${strMealThumb}` }
          />
          <section className="main-container-apresetation">
            <p data-testid="recipe-title">{strMeal}</p>
            <ButtonsFavoriteAndShare testIdShare="share-btn" url={ `http://localhost:3000/comidas/${idMeal}` } />
          </section>
          <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
          {handleIngredients()}
          <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
          <iframe
            data-testid="video"
            title="recipe"
            className="details-video"
            src={ embed }
          />
          <Recomendations />
          <button
            type="button"
            className="start-recipe-btn btn btn-danger py-3"
            data-testid="start-recipe-btn"
            onClick={ () => { history.push(`${pathname}/in-progress`); } }
          >
            {handleButton()}
          </button>
        </div>
      );
    }
  }

  return (
    <div className="details-page wb-5">
      {details.loading || handleDetails()}
    </div>
  );
}

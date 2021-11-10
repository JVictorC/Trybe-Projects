import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import fetchRandomFood from '../../services/fetchRandomFood';
import './Explore.css';
import iconExplorerFood from '../../images/iconExplorerFood.svg';

function ExploreFood() {
  const history = useHistory();

  async function handleClick() {
    const response = await fetchRandomFood();
    const { idMeal } = response[0];
    history.push(`/comidas/${idMeal}`);
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5">
      <nav className="button-explore">
        <Link to="/explorar/comidas/ingredientes">
          <button
            data-testid="explore-by-ingredient"
            type="button"
            className="btn btn-danger text-light px-5"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to="/explorar/comidas/area">
          <button
            data-testid="explore-by-area"
            type="button"
            className="btn btn-danger text-light px-5"
          >
            Por Local de Origem
          </button>
        </Link>

        <button
          data-testid="explore-surprise"
          onClick={ handleClick }
          type="button"
          className="btn btn-danger text-light px-5"

        >
          Me Surpreenda!
        </button>
      </nav>
      <img src={ iconExplorerFood } alt="" className="w-75" />
    </div>
  );
}

export default ExploreFood;

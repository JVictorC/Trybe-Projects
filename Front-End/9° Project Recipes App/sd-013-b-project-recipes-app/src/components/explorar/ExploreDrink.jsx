import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import fetchRandomDrinck from '../../services/fetchRandomDrinck';
import './Explore.css';
import drinksIconExplorar from '../../images/drinksIconExplorar.svg';

function ExploreDrink() {
  const history = useHistory();

  async function handleClick() {
    const response = await fetchRandomDrinck();
    const { idDrink } = response[0];
    history.push(`/bebidas/${idDrink}`);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5">
      <nav className="button-explore">
        <Link to="/explorar/bebidas/ingredientes">
          <button
            data-testid="explore-by-ingredient"
            type="button"
            className="btn btn-danger text-light px-5"
          >
            Por Ingredientes
          </button>
        </Link>

        <button
          data-testid="explore-surprise"
          onClick={ handleClick }
          type="button"
          className="btn btn-danger text-light  px-5"
        >
          Me Surpreenda!
        </button>
      </nav>
      <img src={ drinksIconExplorar } alt="icon drinks" className="w-75" />
    </div>
  );
}

export default ExploreDrink;

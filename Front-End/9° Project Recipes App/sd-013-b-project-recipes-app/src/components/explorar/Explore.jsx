import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';
import explorerCoking from '../../images/explorerCoking.svg';

function Explore() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <nav className="button-explore">
        <Link to="/explorar/comidas">
          <button
            data-testid="explore-food"
            type="button"
            className="btn btn-danger text-light px-5"
          >
            Explorar Comidas
          </button>
        </Link>

        <Link to="/explorar/bebidas">
          <button
            data-testid="explore-drinks"
            type="button"
            className="btn btn-danger text-light px-5"
          >
            Explorar Bebidas
          </button>
        </Link>
      </nav>
      <img src={ explorerCoking } alt="icon coking" className="w-50" />
    </div>
  );
}

export default Explore;

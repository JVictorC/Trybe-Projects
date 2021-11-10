import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../searchBar';

function Header(props) {
  const [TogleeInput, setTogleeInput] = useState(false);
  const [RecipeBarInput, setRecipeBarInput] = useState('');
  const history = useHistory();

  useEffect(() => {
    const { location: { pathname } } = history;
    if (pathname === '/comidas') { setRecipeBarInput('meal'); }
    if (pathname === '/bebidas') { setRecipeBarInput('cocktail'); }
  }, [history]);
  const { titlePage, hasSearchIcon } = props;
  const handleClick = () => { setTogleeInput((prevState) => !prevState); };
  return (
    <div className="container-main-header">
      <header className="container-header">
        <section>
          <h1
            data-testid="page-title"
            className="display-4 text-center"
          >
            { titlePage }
          </h1>
        </section>
        <nav className="container-header-nav">
          <li className="effet-toggle">
            <img
              src={ profileIcon }
              alt="userIcon"
              data-testid="profile-top-btn"
              className="container-header-profile"
              onClick={ () => history.push('/perfil') }
              role="presentation"
            />
          </li>
          {
            hasSearchIcon
        && (
          <li className="effet-toggle">
            <img
              src={ searchIcon }
              alt="searchIcon"
              data-testid="search-top-btn"
              onClick={ handleClick }
              role="presentation"
              className="container-header-explorer"
            />
          </li>
        )
          }
        </nav>
        {TogleeInput && <SearchBar recipe={ RecipeBarInput } />}
      </header>
    </div>
  );
}

Header.defaultProps = {
  hasSearchIcon: false,
};

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
  hasSearchIcon: PropTypes.bool,
};

Header.defaultProps = {
  hasSearchIcon: false,
};

export default Header;

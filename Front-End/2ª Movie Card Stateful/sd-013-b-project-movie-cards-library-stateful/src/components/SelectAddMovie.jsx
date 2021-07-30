import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectAddMovie extends Component {
  render() {
    const { state, hadleChange } = this.props;
    return (
      <label htmlFor="genre-movie" data-testid="genre-input-label">
        Gênero:
        <select
          name="genre"
          id="genre-movie"
          value={ state }
          data-testid="genre-input"
          onChange={ hadleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectAddMovie;

SelectAddMovie.propTypes = {
  state: PropTypes.string.isRequired,
  hadleChange: PropTypes.func.isRequired,
};

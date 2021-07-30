// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelInput from './LabelInput';
import SelectAddMovie from './SelectAddMovie';
import arrayInputs from './DataAddMovie';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.hadleChange = this.hadleChange.bind(this);
    this.hadlerClickButton = this.hadlerClickButton.bind(this);
  }

  hadleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  hadlerClickButton() {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(this.state);
  }

  render() {
    const { state } = this;
    return (
      <form action="" data-testid="add-movie-form">
        {
          arrayInputs.map((objc, index) => (
            <LabelInput
              key={ index }
              title={ objc.title }
              dataTestid={ objc.dataTestid }
              id={ objc.id }
              name={ objc.name }
              dataTestidInput={ objc.dataTestidInput }
              callBack={ this.hadleChange }
              state={ state[objc.myState] }
            />
          ))
        }
        <label htmlFor="rating-movie" data-testid="rating-input-label">
          Avaliação:
          <input
            id="rating-movie"
            type="number"
            name="rating"
            value={ state.rating }
            data-testid="rating-input"
            onChange={ this.hadleChange }
          />
        </label>
        <SelectAddMovie state={ state.genre } hadleChange={ this.hadleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.hadlerClickButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

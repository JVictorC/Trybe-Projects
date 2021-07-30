import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  render() {
    const { dataTestid, id, name, dataTestidInput, callBack, state, title } = this.props;
    return (
      <label htmlFor={ id } data-testid={ dataTestid }>
        { title }
        <input
          type="text"
          id={ id }
          name={ name }
          value={ state }
          data-testid={ dataTestidInput }
          onChange={ callBack }
        />
      </label>
    );
  }
}

export default LabelInput;

LabelInput.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

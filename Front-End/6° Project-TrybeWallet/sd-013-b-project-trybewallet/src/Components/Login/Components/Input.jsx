import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ title, id, type, data, hadlerChange }) {
  return (
    <div className={ `form-${type}` }>
      <input
        type={ type }
        name={ id }
        id={ id }
        data-testid={ data }
        onChange={ hadlerChange }
        className="form-input"
        isRequired
      />
      <label htmlFor={ id } className="form-label">
        {title}
      </label>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  hadlerChange: PropTypes.func.isRequired,
};

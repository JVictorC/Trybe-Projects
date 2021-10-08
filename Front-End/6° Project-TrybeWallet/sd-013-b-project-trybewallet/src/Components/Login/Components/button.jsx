import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// click vem do Estado Global
export default function Button({ click, email, button, className }) {
  const history = useHistory();

  const handlerClick = (e) => {
    e.preventDefault();
    click(email);
    history.push('/carteira');
  };

  return (
    <button
      id="enterButton"
      type="submit"
      disabled={ button }
      onClick={ handlerClick }
      className={ className }
    >
      Entrar
    </button>
  );
}
Button.propTypes = {
  click: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
};

import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import screenLoginfrom from '../../images/screenLogin.svg';

export default function LoginForm({ handleSubmit, handleChangeInput, ButtonDisabled }) {
  return (
    <div className="containerLogin">
      <img
        src={ screenLoginfrom }
        alt="Login"
        className="image-login"
      />
      <form onSubmit={ handleSubmit } className="containerFormLogin">
        <h1 className="display-4 text-danger">Login</h1>
        <label htmlFor="email" className="form-label">
          Email:
          <input
            onChange={ handleChangeInput }
            type="text"
            name="Email"
            id="email"
            data-testid="email-input"
            className="form-control"
          />
        </label>
        <label htmlFor="senha" className="form-label">
          Senha:
          <input
            onChange={ handleChangeInput }
            type="text"
            name="Senha"
            id="senha"
            data-testid="password-input"
            className="form-control"
          />
        </label>
        <Button
          variant="danger"
          data-testid="login-submit-btn"
          disabled={ ButtonDisabled }
          type="submit"
          className="w-100"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  ButtonDisabled: PropTypes.bool.isRequired,
};

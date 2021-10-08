import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Components/Input';
import validateEmail from './Helper/ValidaçãoEmail';
import { setUser } from '../../actions';
import Button from './Components/button';
import Wave from '../../Images/wave.png';

// eslint-disable-next-line max-lines-per-function
function LoginComponent({ setEmailAction }) {
  const [email, setEmail] = useState('');
  const [emailVerific, setEmailVerific] = useState(false);
  const [passwordVerific, setPasswordVerific] = useState(false);
  const [button, setButton] = useState(true);

  function hadlerChange({ target: { name, value } }) {
    // Object Literals
    const actions = {
      email() {
        setEmail(value);
        if (validateEmail(value)) {
          setEmailVerific(true);
        } else { setEmailVerific(false); }
      },
      password() {
        const minCaracter = 5;
        if (value.length > minCaracter) {
          setPasswordVerific(true);
        } else { setPasswordVerific(false); }
      },
    };
    actions[name]();
  }

  function verification() {
    // se o verifc for true quero deixar o botão habilitado
    if (passwordVerific && emailVerific) { setButton(false); } else { setButton(true); }
  }

  useEffect(() => {
    verification();
  }, [passwordVerific, emailVerific]);

  return (
    <div className="form-login-container">
      <form action="" className="form-login">
        <h1 className="form-title">Logar</h1>
        <Input
          title="Email"
          id="email"
          type="email"
          data="email-input"
          hadlerChange={ hadlerChange }
          className="form-login-email"
          isre
        />
        <Input
          title="Senha"
          id="password"
          type="password"
          data="password-input"
          hadlerChange={ hadlerChange }
          className="form-login-password"
        />
        <Button
          email={ email }
          button={ button }
          className="btn btn-Login"
          click={ setEmailAction }
        />
        <p>Email: ...@...com</p>
        <p>Senha: 6 caracteres</p>
      </form>
      <img src={ Wave } alt="" className="wave-1" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (payload) => dispatch(setUser(payload)),
});

export default connect(null, mapDispatchToProps)(LoginComponent);

LoginComponent.propTypes = {
  setEmailAction: PropTypes.func.isRequired,
};

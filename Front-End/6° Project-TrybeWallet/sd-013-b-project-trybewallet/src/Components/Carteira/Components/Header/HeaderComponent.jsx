import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import LottieAnimation from '../../../Animation/Lottie';
import Logo from '../../../Animation/Logo.json';

export default function HeaderComponent(
  { email, total, coins, handlerChange, form, editInfos, handlerClick },
) {
  return (
    <div className="header-container">
      <header>
        <h3 data-testid="email-field" className="header-email">{email}</h3>
        <LottieAnimation
          lotti={ Logo }
          height={ 90 }
          width={ 90 }
          className="header-animation"
        />
        <section className="header-infos-money">
          <h3 data-testid="header-currency-field">BRL</h3>
          <h3 data-testid="total-field">{total}</h3>
        </section>
      </header>
      <Form
        coins={ coins }
        handlerChange={ handlerChange }
        form={ form }
      />
      <input
        type="button"
        value={ editInfos ? 'Editar Despesas' : 'Adicionar Despesas' }
        onClick={ handlerClick }
        className="btn btn-ok"
      />
    </div>
  );
}

HeaderComponent.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(String).isRequired,
  handlerChange: PropTypes.func.isRequired,
  form: PropTypes.objectOf(String).isRequired,
  editInfos: PropTypes.bool.isRequired,
  handlerClick: PropTypes.func.isRequired,
};

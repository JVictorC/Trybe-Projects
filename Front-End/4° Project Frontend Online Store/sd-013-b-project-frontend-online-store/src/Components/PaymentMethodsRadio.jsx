import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethodsRadio extends Component {
  render() {
    const { id, name, title, children } = this.props;
    return (
      <label htmlFor={ id } className="form-check-label label-radio">
        <input type="radio" name={ name } id={ id } className="form-check-input" />
        <div className="colum-display input-radio">
          {children}
          <span className="mx-3">{title}</span>
        </div>
      </label>
    );
  }
}

PaymentMethodsRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PaymentMethodsRadio;

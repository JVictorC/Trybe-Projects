import React from 'react';
import PropTypes from 'prop-types';

export default class Avaliate extends React.Component {
  render() {
    const { updated, avaliations } = this.props;
    return (
      <div>
        {updated && avaliations.map(({ email, rate, text }, id) => (
          <div key={ id }>
            <p>{email}</p>
            <p>{rate}</p>
            {text ? <p>{text}</p> : false}
          </div>
        ))}
      </div>
    );
  }
}

Avaliate.propTypes = {
  updated: PropTypes.bool.isRequired,
  avaliations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function SelectCoins({ handlerChange, coins, Value }) {
  return (
    <label htmlFor="coin">
      Moeda:
      <select onChange={ handlerChange } name="currency" id="coin" value={ Value }>
        {
          coins.map((coin) => (
            <option value={ coin } key={ coin }>
              {coin}
            </option>
          ))
        }
      </select>
    </label>
  );
}

SelectCoins.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(String).isRequired,
  Value: PropTypes.string.isRequired,
};

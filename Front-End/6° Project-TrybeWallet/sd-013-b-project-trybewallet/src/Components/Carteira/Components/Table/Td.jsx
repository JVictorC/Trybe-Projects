import React from 'react';
import PropTypes from 'prop-types';

export default function Td({ name }) {
  return (
    <td>
      {name}
    </td>
  );
}

// One Type, Inspirado no codigo: https://stackoverflow.com/questions/41808428/react-proptypes-allow-different-types-of-proptypes-for-one-prop
Td.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

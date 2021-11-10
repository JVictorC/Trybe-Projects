import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from './buttonShare';
import FavButton from './FavButton';

export default function ButtonsFavoriteAndShare({ testIdShare, url }) {
  return (
    <section className="buttons-shareAndFavorite">
      <ButtonShare datatestid={ testIdShare } url={ url } />
      <FavButton />
    </section>
  );
}

ButtonsFavoriteAndShare.propTypes = {
  testIdShare: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

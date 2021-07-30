// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="movie-card-ratings">
        <p className="rating">{rating}</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

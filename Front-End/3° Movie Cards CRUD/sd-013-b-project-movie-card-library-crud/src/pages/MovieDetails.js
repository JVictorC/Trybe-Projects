import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      shouldRedirect: false,
    };
    this.fetchMovieById = this.fetchMovieById.bind(this);
    this.deletedMovie = this.deletedMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovieById(id);
  }

  async fetchMovieById(id) {
    const fetchMovie = await movieAPI.getMovie(id);
    this.setState({ movies: fetchMovie });
  }

  async deletedMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const component = (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtítulo: ${subtitle}`}</p>
        <p>{`Sinopse: ${storyline}`}</p>
        <p>{`Gênero: ${genre}`}</p>
        <p>{`Avaliação: ${rating}`}</p>
      </>
    );
    if (shouldRedirect) { return <Redirect to="/" />; }
    return (
      <div data-testid="movie-details">
        {
          (movies.title === undefined) ? <Loading /> : component
        }
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deletedMovie }>DELETAR</Link>
      </div>
    );
  }
}

/* Referencia de consulta: https://stackoverflow.com/questions/46484026/eslint-react-router-v4-how-to-validate-match-params-props/47682384 */

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;

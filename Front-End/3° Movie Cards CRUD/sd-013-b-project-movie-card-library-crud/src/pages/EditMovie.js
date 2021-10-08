import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovieById(id);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovieById(id) {
    const fetchMovie = await movieAPI.getMovie(id);
    this.setState({ movie: fetchMovie, status: 'Completed' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    let componente = (
      <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
    );
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      componente = <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        {
          componente
        }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;

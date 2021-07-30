import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.hadleSearchText = this.hadleSearchText.bind(this);
    this.hadleFilterFavorite = this.hadleFilterFavorite.bind(this);
    this.hadleFilterGenre = this.hadleFilterGenre.bind(this);
    this.hadlerClickButton = this.hadlerClickButton.bind(this);
  }

  hadleSearchText({ target }) {
    const { movies } = this.props;
    const { value } = target;
    this.setState({
      searchText: value,
      movies: movies.filter(({ title, subtitle, storyline }) => (
        title.includes(target.value)
        || subtitle.includes(target.value)
        || storyline.includes(target.value)
      )),
    });
  }

  hadleFilterFavorite({ target }) {
    const { movies } = this.props;
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });

    if (checked === true) {
      return (
        this.setState({
          movies: movies.filter(({ bookmarked }) => (
            bookmarked === true
          )),
        })
      );
    } if (checked === false) {
      return (
        this.setState({
          movies: movies.filter(() => (
            true
          )),
        }));
    }
  }

  hadleFilterGenre({ target }) {
    const { movies } = this.props;
    this.setState({
      selectedGenre: target.value,
      movies: movies
        .filter(({ genre }) => this.Compare(target.value, genre)),
    });
  }

  Compare(value, genre) {
    if (value === '') { return true; }
    if (value === genre) { return true; }
  }

  hadlerClickButton(newMovie) {
    const { movies } = this.state;
    /* Com ajuda de Rodrigo Aug */
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { state } = this;
    return (
      <div>
        <SearchBar
          searchText={ state.searchText }
          onSearchTextChange={ this.hadleSearchText }
          bookmarkedOnly={ state.bookmarkedOnly }
          selectedGenre={ state.selectedGenre }
          onBookmarkedChange={ this.hadleFilterFavorite }
          onSelectedGenreChange={ this.hadleFilterGenre }
        />
        <MovieList movies={ state.movies } />
        <AddMovie onClick={ this.hadlerClickButton } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

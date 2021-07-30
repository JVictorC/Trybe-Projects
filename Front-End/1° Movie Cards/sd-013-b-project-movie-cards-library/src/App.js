import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;

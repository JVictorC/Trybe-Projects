import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          component={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          component={ (props) => <EditMovie { ...props } /> }
        />
        {/* Consulta em https://ultimatecourses.com/blog/react-router-not-found-component */}
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

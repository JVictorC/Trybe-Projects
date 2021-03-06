import React from 'react';
import 'tailwindcss/tailwind.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ExplorarOrigem from './pages/ExplorarOrigem';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import InProgress from './pages/InProgress';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/comidas/:id" component={ Detalhes } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/bebidas/:id" component={ Detalhes } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route
          exact
          path="/comidas/:id/in-progress"
          component={ InProgress }
        />
        <Route
          exact
          path="/bebidas/:id/in-progress"
          component={ InProgress }
        />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarBebidasIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarOrigem } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import ExploreFood from '../components/explorar/ExploreFoof';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const EX_COMIDAS = '/explorar/comidas';
const testeIdExplorer = 'explore-surprise';
describe('Testando o componente ExploreFood', () => {
  test('Se tem tres botoes na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_COMIDAS);
    const BTNS_PG = 3;
    const btns = screen.getAllByRole('button');
    expect(btns.length).toBe(BTNS_PG);
  });
  test('Se ao clicar no Por ingredientes renderize um h1 na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_COMIDAS);
    const byIngredients = screen.getByTestId('explore-by-ingredient');
    expect(byIngredients).toBeInTheDocument();
    userEvent.click(byIngredients);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /Explorar Ingredientes/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Se ao clicar no Por local de origem, renderize um h1 na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_COMIDAS);
    const byArea = screen.getByTestId('explore-by-area');
    expect(byArea).toBeInTheDocument();
    userEvent.click(byArea);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /Explorar Origem/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Se existe o botao Me Surpreenda!', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas');
    const surpriseMe = screen.getByTestId('explore-surprise');
    expect(surpriseMe).toBeInTheDocument();
  });
});

describe('Testes no Componente ExploreFood', () => {
  test('Testa se há dois butões na tela ', () => {
    renderWithRouterAndRedux(<ExploreFood />);
    const buttonMeSurpreenda = screen.getByTestId(testeIdExplorer);
    expect(buttonMeSurpreenda).toBeInTheDocument();
    const buttonExplorar = screen.getByTestId('explore-by-ingredient');
    expect(buttonExplorar).toBeInTheDocument();
  });
  test('Testa se é redirecionado assim que clicado no butão surpreenda me',
    async () => {
      const { history } = renderWithRouterAndRedux(<App />, {
        initialEntries: [
          EX_COMIDAS,
        ] });
      const buttonMeSurpreenda = screen.getByTestId(testeIdExplorer);
      expect(buttonMeSurpreenda).toBeInTheDocument();
      userEvent.click(buttonMeSurpreenda);

      const testeSeHaCategory = await screen.findByText(/Categor/i);
      expect(testeSeHaCategory).toBeInTheDocument();
      const { location: { pathname } } = history;
      expect(pathname.includes('comidas')).toBeTruthy();
    });
});

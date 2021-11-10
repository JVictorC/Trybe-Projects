import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';
import ExploreDrink from '../components/explorar/ExploreDrink';

const EX_BEBIDAS = '/explorar/bebidas';
const testeIdExplorer = 'explore-surprise';

describe('Testando o componente ExploreDrinck', () => {
  test('Se tem Dois botoes na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_BEBIDAS);
    const BTNS_PG = 2;
    const btns = screen.getAllByRole('button');
    expect(btns.length).toBe(BTNS_PG);
  });
  test('Se ao clicar no Por ingredientes renderize um h1 na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_BEBIDAS);
    const byIngredients = screen.getByTestId('explore-by-ingredient');
    expect(byIngredients).toBeInTheDocument();
    userEvent.click(byIngredients);
    const text = screen.getByRole('heading', {
      level: 1,
      name: /Explorar Ingredientes/i,
    });
    expect(text).toBeInTheDocument();
  });
  test('Se existe o botao Me Surpreenda!', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push(EX_BEBIDAS);
    const surpriseMe = screen.getByTestId(testeIdExplorer);
    expect(surpriseMe).toBeInTheDocument();
  });
});

describe('Testes no Componente ExploreDrink', () => {
  test('Testa se há dois butões na tela ', () => {
    renderWithRouterAndRedux(<ExploreDrink />);
    const buttonMeSurpreenda = screen.getByTestId(testeIdExplorer);
    expect(buttonMeSurpreenda).toBeInTheDocument();
    const buttonExplorar = screen.getByTestId('explore-by-ingredient');
    expect(buttonExplorar).toBeInTheDocument();
  });
  test('Testa se é redirecionado assim que clicado no butão surpreenda me',
    async () => {
      const { history } = renderWithRouterAndRedux(<App />, {
        initialEntries: [
          EX_BEBIDAS,
        ] });
      const buttonMeSurpreenda = screen.getByTestId(testeIdExplorer);
      expect(buttonMeSurpreenda).toBeInTheDocument();
      userEvent.click(buttonMeSurpreenda);

      const testeSeHaCategory = await screen.findByText(/Categor/i);
      expect(testeSeHaCategory).toBeInTheDocument();
      const { location: { pathname } } = history;
      expect(pathname.includes('bebidas')).toBeTruthy();
    });
});

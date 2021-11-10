import { screen } from '@testing-library/dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';
import { fetchIngridientsCocktail } from '../services/fetchIngridients';
import mockDrinksIngridientes from './mocks/ingridientesBebidas';

const rotaInicial = '/explorar/bebidas/ingredientes';
const LIMIT_ELEMENT = 12;

describe('', () => {
  afterEach(() => { jest.clearAllMocks(); });
  beforeEach(() => {
    global.fetch = jest.fn(async () => (
      { ok: true, json: async () => (mockDrinksIngridientes) }
    ));
  });

  test('Deveria Haver 12 card com Texto e Foto', async () => {
    const { history } = renderWithRouterAndRedux(<App />,
      { initialEntries: [rotaInicial],
      });

    const { location: { pathname } } = history;
    expect(pathname).toBe(rotaInicial);

    const returnFetch = await fetchIngridientsCocktail();
    expect(returnFetch).toEqual(mockDrinksIngridientes);
    expect(global.fetch).toBeCalled();

    const { drinks } = mockDrinksIngridientes;
    drinks
      .slice(0, LIMIT_ELEMENT)
      .map(async (_, index) => {
        const elementCard = await screen.findByTestId(`${index}-ingredient-card`);
        const elementName = await screen.findByTestId(`${index}-card-name`);
        const elementImage = await screen.findByTestId(`${index}-card-img`);
        expect(elementCard).toBeInTheDocument();
        expect(elementName).toBeInTheDocument();
        expect(elementImage).toBeInTheDocument();
      });
  });

  test('testa que assim que clicado um card é redirecionado', async () => {
    const { history } = renderWithRouterAndRedux(<App />,
      { initialEntries: [rotaInicial],
      });
    const { location: { pathname: pathNameBeforeClick } } = history;
    expect(pathNameBeforeClick).toBe(rotaInicial);

    const cardChicken = await screen.findByTestId('0-ingredient-card');
    userEvent.click(cardChicken);
    const { location: { pathname: pathNameAfterClick } } = history;

    expect(pathNameAfterClick).toBe('/bebidas');
  });
});

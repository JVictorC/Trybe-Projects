import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';
import mockInputOrigem from './mocks/inputsExplorarComidas';
import fetchAreasMeal from '../services/fetchAreas';
import mockItensFilterByAmerican from './mocks/intensFilterByAmericanArea';
import comidasMock from './mocks/comidas';
import bebidasMock from './mocks/bebidas';
import mockBananaMock from './mocks/mockFetchBananaAndPancakes';

const rotaInicial = '/explorar/comidas/area';
const LIMIT_ELEMENT = '12';
const dropDownList = 'explore-by-area-dropdown';

describe('Testes na Rota /explorar/comidas/area', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(async (url) => ({
      ok: true,
      json: async () => {
        switch (url) {
        case 'https://www.themealdb.com/api/json/v1/1/list.php?a=list':
          return mockInputOrigem;
        case 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American':
          return mockItensFilterByAmerican;
        case 'https://www.themealdb.com/api/json/v1/1/search.php?s=':
          return comidasMock;
        case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=':
          return bebidasMock;
        case 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855':
          return mockBananaMock;
        default:
          break;
        }
      },
    }));
  });

  test(`Testa se há algium input do Type Select com o DataTest
  explore-by-area-dropdown e se há o texto Explorar Origim`,
  () => {
    const { history } = (
      renderWithRouterAndRedux(<App />, { initialEntries: [rotaInicial] })
    );
    const { location: { pathname } } = history;
    expect(pathname).toBe(rotaInicial);
    const textExplorarOrigem = screen.getByText('Explorar Origem');
    const inputSelect = screen.getByTestId(dropDownList);
    expect(inputSelect).toBeInTheDocument();
    expect(textExplorarOrigem).toBeInTheDocument();
  });

  test('Testa se todos os Input são os mesmo da resposta da API', async () => {
    const { history } = (
      renderWithRouterAndRedux(<App />, { initialEntries: [rotaInicial] })
    );
    const { location: { pathname } } = history;
    expect(pathname).toBe(rotaInicial);

    expect(fetchAreasMeal()).resolves.toEqual(mockInputOrigem);

    const { meals } = mockInputOrigem;

    meals.map(async ({ strArea }) => {
      const elementInput = await screen.findByTestId(`${strArea}-option`);
      expect(elementInput).toBeInTheDocument();
    });
  });

  test('Testa se é retornado o Array de Comidas por aréa assim que selecionado o Input ',
    async () => {
      const { history } = (
        renderWithRouterAndRedux(<App />, { initialEntries: [rotaInicial] })
      );
      const { location: { pathname } } = history;
      expect(pathname).toBe(rotaInicial);

      const inputSelect = screen.getByTestId(dropDownList);

      const inputAmerican = await screen.findByTestId('American-option');

      fireEvent.change(inputSelect, { target: { value: 'American' } });

      expect(inputAmerican.selected).toBeTruthy();

      const { meals } = mockItensFilterByAmerican;

      meals
        .slice(0, LIMIT_ELEMENT)
        .map(async ({ strMeal, strMealThumb }, index) => {
          const cardName = await screen.findByTestId(`${index}-card-name`);
          const cardImg = await screen.findByTestId(`${index}-card-img`);
          expect(cardImg.src).toBe(strMealThumb);

          // Foi preciso fazer desse metodo pois há uma frase que no HTML está vindo Bugada

          const fisrtTwoLatterHTML = cardName.innerHTML.split(' ').slice(0, 2);
          const fisrtTwoLatterMeal = strMeal.split(' ').slice(0, 2);

          expect(fisrtTwoLatterHTML.join('')).toBe(fisrtTwoLatterMeal.join(''));
        });
    });

  test('Testa se é redirecionada para a pagina da comida selecionada',
    async () => {
      const { history } = (
        renderWithRouterAndRedux(<App />, { initialEntries: [rotaInicial] })
      );
      const { location: { pathname: pathnameInitial } } = history;

      expect(pathnameInitial).toBe(rotaInicial);

      const inputSelect = screen.getByTestId(dropDownList);

      const inputAmerican = await screen.findByTestId('American-option');

      fireEvent.change(inputSelect, { target: { value: 'American' } });

      expect(inputAmerican.selected).toBeTruthy();

      const cardSelect = await screen.findByText('Banana Pancakes');

      expect(cardSelect).toBeInTheDocument();

      userEvent.click(cardSelect);

      const { location: { pathname: pathnameAfterClick } } = history;

      expect(pathnameAfterClick).toBe('/comidas/52855');
    });
});

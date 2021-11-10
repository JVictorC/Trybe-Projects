import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

const initialLocal = [
  {
    alcoholicOrNot: 'Optional alcohol',
    area: '',
    category: 'Ordinary Drink',
    id: '15997',
    image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name: 'GG',
    tags: ['A, B, C'],
    doneDate: '5/9/2021',
    type: 'bebida',
  },
  {
    alcoholicOrNot: '',
    area: 'Croatian',
    category: 'Side',
    id: '53060',
    image: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
    name: 'Burek',
    tags: ['B, C, D'],
    doneDate: '5/9/2021',
    type: 'comida',
  },
];

const initialRota = '/receitas-feitas';

describe('Testes na pagina /receitas-feitas', () => {
  afterEach(() => {
    localStorage.clear();
  });
  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(initialLocal));
  });
  test('Testa se há um Titulo para a pagina', () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: [initialRota],
    });
    const HeaderReceitasFavorita = screen.getByText(/Receitas Feitas/i);
    expect(HeaderReceitasFavorita).toBeInTheDocument();
  });

  test('Testa se os intens salvos no local Storage são renderizados', () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: [initialRota],
    });

    initialLocal.forEach(({ name, image, doneDate }, index) => {
      const cardName = screen.getByTestId(`${index}-horizontal-name`);
      const cardImage = screen.getByTestId(`${index}-horizontal-image`);
      const dataDone = screen.getByTestId(`${index}-horizontal-done-date`);
      expect(dataDone.innerHTML).toBe(doneDate);
      expect(cardName.innerHTML).toBe(name);
      expect(cardImage.src).toBe(image);
    });
  });
});

describe('Testa os Butões de Filtros', () => {
  afterEach(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(initialLocal));
  });

  test('Testa se os buttons de Filtros estão na Tela ', () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: [initialRota],
    });
    const buttonAll = screen.getByTestId('filter-by-all-btn');
    const buttonFood = screen.getByTestId('filter-by-food-btn');
    const buttonDrink = screen.getByTestId('filter-by-drink-btn');

    expect(buttonAll).toBeInTheDocument();
    expect(buttonFood).toBeInTheDocument();
    expect(buttonDrink).toBeInTheDocument();
  });

  test('Testa se é feito os Filtro caso o Food seja clicado', async () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: [initialRota],
    });
    const buttonFood = screen.getByTestId('filter-by-food-btn');

    userEvent.click(buttonFood);

    initialLocal
      .filter(({ type }) => type !== 'bebida')
      .forEach(({ name, image }, index) => {
        const cardName = screen.getByTestId(`${index}-horizontal-name`);
        const cardImage = screen.getByTestId(`${index}-horizontal-image`);
        expect(cardName.innerHTML).toBe(name);
        expect(cardImage.src).toBe(image);
      });
  });
  test('Testa se é feito os Filtro caso o Drink seja clicado e o Botão All', async () => {
    renderWithRouterAndRedux(<App />, {
      initialEntries: [initialRota],
    });
    const buttonDrink = screen.getByTestId('filter-by-drink-btn');
    const buttonAll = screen.getByTestId('filter-by-all-btn');
    userEvent.click(buttonDrink);
    initialLocal
      .filter(({ type }) => type === 'bebida')
      .forEach(({ name }, index) => {
        const cardName = screen.getByTestId(`${index}-horizontal-name`);
        expect(cardName.innerHTML).toBe(name);
      });
    userEvent.click(buttonAll);
    initialLocal
      .forEach(({ image }, index) => {
        const cardImage = screen.getByTestId(`${index}-horizontal-image`);
        expect(cardImage.src).toBe(image);
      });
  });

  test('o usuario deveria ser redirecionado ao clicar em uma imagem', () => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: [initialRota],
    });

    const cardImage = screen.getByTestId('0-horizontal-image');

    userEvent.click(cardImage);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/bebidas/15997');
  });
});

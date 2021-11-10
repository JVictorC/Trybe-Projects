import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';
import App from '../App';

const CARDS_LENGHT = 6;

describe('Detalhes bebidas', () => {
  beforeAll(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/15997');
  });

  test('Se aparece imagem da bebida na tela', async () => {
    const IMG = await screen.findByTestId('recipe-photo');
    expect(IMG).toBeInTheDocument();
  });

  test('Se aparece o nome da bebida na tela', async () => {
    const NAME = await screen.findByTestId('recipe-title');
    expect(NAME).toBeInTheDocument();
  });

  test('Se existe botão de Share', async () => {
    const SHARE_BTN = await screen.findByTestId('share-btn');
    expect(SHARE_BTN).toBeInTheDocument();
  });

  test('Se o botão de favorito está na tela', async () => {
    const FAVORITE_BTN = await screen.findByTestId('favorite-btn');
    expect(FAVORITE_BTN).toBeInTheDocument();
  });

  test('Se o texto de categoria está na tela', async () => {
    const CATEGORY = await screen.findAllByTestId('recipe-category');
    expect(CATEGORY[0]).toBeInTheDocument();
  });

  test('Se as instruções estão na tela', async () => {
    const INSTRUCTIONS = await screen.findByTestId('instructions');
    expect(INSTRUCTIONS).toBeInTheDocument();
  });

  test('Se o vídeo não está na tela', async () => {
    const VIDEO = await screen.queryByTestId('video');
    expect(VIDEO).toBeNull();
  });

  test('Se possuem os cards de titulos de recomendações na tela', async () => {
    const CARDS_TITLE = await screen.findAllByTestId(/-recomendation-card/);
    expect(CARDS_TITLE.length).toBe(CARDS_LENGHT);
  });

  test('Se tem a quantidade certa de cards de recomendação na tela', async () => {
    const CARDS_RECOMENDATIONS = await screen.findAllByTestId(/-recomendation-title/);
    expect(CARDS_RECOMENDATIONS.length).toBe(CARDS_LENGHT);
  });

  test('Se há o botão de iniciar receita', async () => {
    const START_BTN = await screen.findByTestId('start-recipe-btn');
    expect(START_BTN).toBeInTheDocument();
  });

  test('Se ao clicar no botão de iniciar receita é levado para página correta',
    async () => {
      const history = createMemoryHistory();
      history.push('/bebidas/15997');
      const START_BTN = await screen.findByTestId('start-recipe-btn');
      fireEvent.click(START_BTN);
      history.push('/bebidas/15997/in-progress');
      expect(history.location.pathname).toBe('/bebidas/15997/in-progress');
    });

  test('Se ao clicar no botão de favorito, é salvo corretamente no localstorage',
    async () => {
      const FAVORITE_BTN = await screen.findByTestId('favorite-btn');
      const NAME = await screen.findByText('GG');
      expect(NAME).toBeInTheDocument();
      fireEvent.click(FAVORITE_BTN);
      const storage = await JSON.parse(localStorage.getItem('favoriteRecipes'));
      expect(storage).toEqual([{
        alcoholicOrNot: 'Optional alcohol',
        area: '',
        category: 'Ordinary Drink',
        id: '15997',
        image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
        name: 'GG',
        type: 'bebida',
      }]);
    });
});

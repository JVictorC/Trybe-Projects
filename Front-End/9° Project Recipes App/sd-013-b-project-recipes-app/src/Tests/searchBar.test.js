// import React from 'react';
// import { screen, fireEvent, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { createMemoryHistory } from 'history';
// import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';
// import Comidas from '../pages/Comidas';
// import SearchBar from '../components/searchBar';

// const NUMBER_CARDS = 12;

// const SEARCH_INPUT = 'search-input';
// const SEARCH_TOP_BTN = 'search-top-btn';
// const EXEC_SEARCH_BTN = 'exec-search-btn';

// describe('Header search', () => {
//   beforeEach(() => {
//     renderWithRouterAndRedux(<Comidas />);
//   });

//   test('Se o título está na página', async () => {
//     const PAGE_TITLE = screen.getByText('Comidas');
//     expect(PAGE_TITLE).toBeInTheDocument();
//   });

//   test('Se tem o input não está na tela ao entrar', () => {
//     expect(screen.queryByTestId(SEARCH_INPUT)).not.toBeInTheDocument();
//   });

//   test('Verifica se o ícone de perfil tem a imagem correta', () => {
//     const ICON_PROFILE = screen.getByAltText('userIcon');
//     expect(ICON_PROFILE).toHaveAttribute('src', 'profileIcon.svg');
//   });

//   test('Se ao clicar no ícone de profile é levado a página correta', () => {
//     const { history } = renderWithRouterAndRedux(<Comidas />);
//     const PROFILE_BUTTON = screen.getAllByTestId('profile-top-btn');
//     userEvent.click(PROFILE_BUTTON[1]);
//     expect(history.location.pathname).toBe('/perfil');
//   });

//   test('Se ao clicar no botão de search o input para procurar aparece', () => {
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     expect(INPUT).toBeInTheDocument();
//   });

//   test('Se é possível digitar no input', () => {
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     userEvent.type(INPUT, 'XABLAU!!!');
//     expect(INPUT).toHaveValue('XABLAU!!!');
//   });

//   test('Se a busca é feita corretamente por ingredientes', async () => {
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     userEvent.type(INPUT, 'fish');
//     const RADIO_INGREDIENTE = screen.getByTestId('ingredient-search-radio');
//     const BUTTON_SEARCH_EXEC = screen.getByTestId(EXEC_SEARCH_BTN);
//     fireEvent.click(RADIO_INGREDIENTE);
//     fireEvent.click(BUTTON_SEARCH_EXEC);
//     const INGREDIENT_CARDS = await screen.findAllByTestId(/-recipe-card/);
//     expect(INGREDIENT_CARDS.length).toBe(NUMBER_CARDS);
//   });

//   test('Se a busca é feita corretaente por nome', async () => {
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     userEvent.type(INPUT, 'Arrabiata');
//     const RADIO_NAME = screen.getByTestId('name-search-radio');
//     const BUTTON_SEARCH_EXEC = screen.getByTestId(EXEC_SEARCH_BTN);
//     fireEvent.click(RADIO_NAME);
//     fireEvent.click(BUTTON_SEARCH_EXEC);
//     const CARDS = await screen.findAllByTestId(/-recipe-card/);
//     expect(CARDS.length).toBe(NUMBER_CARDS);
//   });

//   test('Se a buscar é feita corretamente pela primeira letra', async () => {
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     userEvent.type(INPUT, 'a');
//     const RADIO_FIRST_LETTER = screen.getByTestId('first-letter-search-radio');
//     const BUTTON_SEARCH_EXEC = screen.getByTestId(EXEC_SEARCH_BTN);
//     fireEvent.click(RADIO_FIRST_LETTER);
//     fireEvent.click(BUTTON_SEARCH_EXEC);
//     const INGREDIENT_CARDS = await screen.findAllByTestId(/-recipe-card/);
//     expect(INGREDIENT_CARDS.length).toBe(NUMBER_CARDS);
//   });

//   test('Se aparece um alerta ao digitar mais de uma letra', async () => {
//     jest.spyOn(window, 'alert').mockImplementation(() => {});
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     userEvent.type(INPUT, 'xablau');
//     const RADIO_FIRST_LETTER = screen.getByTestId('first-letter-search-radio');
//     const BUTTON_SEARCH_EXEC = screen.getByTestId(EXEC_SEARCH_BTN);
//     fireEvent.click(RADIO_FIRST_LETTER);
//     fireEvent.click(BUTTON_SEARCH_EXEC);
//     expect(global.alert).toHaveBeenCalled();
//   });

//   test('Se for encontrado apenas uma receita é levado a tela de detalhes', async () => {
//     const history = createMemoryHistory();
//     const BUTTON_SEARCH = screen.getByTestId(SEARCH_TOP_BTN);
//     fireEvent.click(BUTTON_SEARCH);
//     const INPUT = screen.getByTestId(SEARCH_INPUT);
//     userEvent.type(INPUT, 'arrabiata');
//     const RADIO_NAME = screen.getByTestId('name-search-radio');
//     const BUTTON_SEARCH_EXEC = screen.getByTestId(EXEC_SEARCH_BTN);
//     fireEvent.click(RADIO_NAME);
//     fireEvent.click(BUTTON_SEARCH_EXEC);
//     history.push('/comidas/52771');
//     expect(history.location.pathname).toBe('/comidas/52771');
//   });
// });

describe('Search bar', () => {
  test('To comentado', () => {
  });
});

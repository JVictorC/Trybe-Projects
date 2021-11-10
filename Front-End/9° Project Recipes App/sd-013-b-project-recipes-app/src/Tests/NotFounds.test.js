import { screen } from '@testing-library/dom';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helper/RenderWithRouterAndRedux';

describe('TEstes na Pagina Not Found', () => {
  test('Deveria aparecer uma mensagem de Not found ao acessar a pagina /comidasbebidas',
    () => {
      const { history } = renderWithRouterAndRedux(<App />);
      history.push('/comdiasbebidas');
      const notFound = screen.getByText(/Not Found/i);
      expect(notFound).toBeInTheDocument();
    });
});

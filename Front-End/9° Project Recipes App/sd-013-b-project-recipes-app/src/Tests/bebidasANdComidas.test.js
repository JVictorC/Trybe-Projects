import bebidasMock from './mocks/bebidas';
import comidasMock from './mocks/comidas';

describe('Testa os Objetos Bebidas e Comidas Mock', () => {
  test('Bebidas Mock deveria retornar um objeto com a chave drink', () => {
    const { drinks } = bebidasMock;
    expect(Array.isArray(drinks)).toBeTruthy();
  });
  test('Comidas Mock deveria retornar um objeto com a chave meal', () => {
    const { meals } = comidasMock;
    expect(Array.isArray(meals)).toBeTruthy();
  });
});

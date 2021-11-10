import fetchRandomDrinck from '../services/fetchRandomDrinck';
import fetchRandomFood from '../services/fetchRandomFood';
import randomMealMock from './mocks/randomMockMeal';
import mockDrinksRandom from './mocks/randomMockDrink';

describe('Testa a Função fetchRandomFood', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => randomMealMock,
    }));
  });

  test('Testa se o retorno da função é uma promise', () => {
    const { meals } = randomMealMock;
    expect(fetchRandomFood()).resolves.toEqual(meals);
  });
});

describe('Testa a Função fetchRandomDrinck', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => mockDrinksRandom,
    }));
  });

  test('Testa se o retorno da função é uma promise', () => {
    const { drinks } = mockDrinksRandom;
    expect(fetchRandomDrinck()).resolves.toEqual(drinks);
  });
});

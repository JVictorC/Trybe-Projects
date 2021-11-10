import fetchMealsItensByArea from '../services/fetchItensByArea';
import mockItensFilterByAmerican from './mocks/intensFilterByAmericanArea';

describe('Testa a Função fetchMealsItensByArea', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => mockItensFilterByAmerican,
    }));
  });

  test('Testa se a função fetchMealsItensByArea retorna uma promise', () => {
    expect(fetchMealsItensByArea()).resolves.toEqual(mockItensFilterByAmerican);
  });
});

import fetchAreas from '../services/fetchAreas';
import mockInputOrigem from './mocks/inputsExplorarComidas';

describe('Testa a Função fetchAreas', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => mockInputOrigem,
    }));
  });

  test('Testa se o retorno da função é uma promise', () => {
    const { meals } = mockInputOrigem;
    expect(fetchAreas()).resolves.toEqual(meals);
  });
});

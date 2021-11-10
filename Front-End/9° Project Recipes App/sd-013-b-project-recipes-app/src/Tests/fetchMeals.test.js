import {
  fetchMealByFirstLetter, fetchMealByIngredient, fetchMealByName,
} from '../services/fetchMeals';
import mockIntesnFilterByIngridiente from './mocks/mockItensFilterByIngridients';
import mockItensFilterByFirstItem from './mocks/mockItensFilterByFisrtsLetter';
import mockItemFilterByName from './mocks/mockIntemFilterByName';

const mockFetch = async (url) => ({
  ok: true,
  json: async () => {
    switch (url) {
    case 'https://www.themealdb.com/api/json/v1/1/search.php?f=a':
      return mockItensFilterByFirstItem;
    case 'https://www.themealdb.com/api/json/v1/1/search.php?s=Corba':
      return mockItemFilterByName;
    case 'https://www.themealdb.com/api/json/v1/1/filter.php?i=rice':
      return mockIntesnFilterByIngridiente;
    default:
      return {
        meals: null,
      };
    }
  },
});

describe('Testa a Função fetchMealByIngredient do aquivo services/fetchMeals', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  test('Testa se a fetchMealByIngredient retorna uma promise ', () => {
    expect(fetchMealByIngredient('rice'))
      .resolves.toEqual(mockIntesnFilterByIngridiente);
  });
});

describe('Test a fetchMealByFirstLetter  no services/fetchMeals', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });
  test('Testa se a fetchMealByFirstLetter retorna uma promise', () => {
    expect(fetchMealByFirstLetter('a'))
      .resolves.toEqual(mockItensFilterByFirstItem);
  });

  test('Testa se lança um alert caso o type seja maior que 1', () => {
    global.alert = jest.fn(() => {});
    const { meals } = fetchMealByFirstLetter('ab');
    expect(meals).toEqual([]);
    expect(global.alert).toBeCalled();
  });
});

describe('Testa a fetchMealByName  bo services/fetchMeals', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });
  test('Testa se a fetchMealByName retorna uma promise ', () => {
    expect(fetchMealByName('Corba'))
      .resolves.toEqual(mockItemFilterByName);
  });
  test('Testa se a fetchMealByName retorna um erro caso não seja encontrado itens',
    async () => {
      global.alert = jest.fn(() => {});
      const { meals } = await fetchMealByName('Xablau');
      expect(meals).toEqual([]);
      expect(global.alert).toBeCalled();
    });
});

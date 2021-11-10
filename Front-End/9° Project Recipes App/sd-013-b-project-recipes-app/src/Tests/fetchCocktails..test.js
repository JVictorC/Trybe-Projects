import
{ fetchCocktailByFirstLetter, fetchCocktailByIngredient, fetchCocktailByName }
  from '../services/fetchCocktails';
import mockitensFilterByFirstLetterDrink from './mocks/mockItensFilterByFirstItemDrink';
import mockIntesFilterByNameDrink from './mocks/mockItemFilterByNameDrink';

import mockItensFilterByIngridientesDrinks from
  './mocks/mockIntesnFilterByIngridienteDrink';

const mockFetch = async (url) => ({
  json: async () => {
    switch (url) {
    case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka':
      return mockItensFilterByIngridientesDrinks;
    case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=501':
      return mockIntesFilterByNameDrink;
    case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y':
      return mockitensFilterByFirstLetterDrink;
    default:
      return {
        drinks: null,
      };
    }
  },
});

describe('Testa a fetchCocktailByFirstLetter na pasta src/services/fetchCocktails',
  () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    beforeEach(() => {
      global.fetch = jest.fn(mockFetch);
    });

    test('Testa se retorno da função é uma promise', () => {
      expect(fetchCocktailByFirstLetter('y'))
        .resolves.toEqual(mockitensFilterByFirstLetterDrink);
    });
    test('Testa se lança um alert caso o type seja maior que 1', () => {
      global.alert = jest.fn(() => {});
      const { drinks } = fetchCocktailByFirstLetter('ab');
      expect(drinks).toEqual([]);
      expect(global.alert).toBeCalled();
    });
  });

describe('Testa a fetchCocktailByIngredient na pasta src/services/fetchCocktails',
  () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    beforeEach(() => {
      global.fetch = jest.fn(mockFetch);
    });

    test('Testa se o retorno da função é uma promise', () => {
      expect(fetchCocktailByIngredient('vodka'))
        .resolves.toEqual(mockItensFilterByIngridientesDrinks);
    });
  });

describe('Testa a fetchCocktailByName na pasta src/services/fetchCocktails',
  () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    beforeEach(() => {
      global.fetch = jest.fn(mockFetch);
    });

    test('Testa se o retorno da função é uma promise', () => {
      expect(fetchCocktailByName('501'))
        .resolves.toEqual(mockIntesFilterByNameDrink);
    });

    test('Testa se a fetchMealByName retorna um erro caso não seja encontrado itens',
      async () => {
        global.alert = jest.fn(() => {});
        const { drinks } = await fetchCocktailByName('Xablau');
        expect(drinks).toEqual([]);
        expect(global.alert).toBeCalled();
      });
  });

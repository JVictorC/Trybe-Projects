const assert = require('assert');
const { type } = require('os');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const listProducts =  productDetails ('Alcool gel', 'Máscara');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(listProducts),true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(listProducts.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(listProducts[0]), 'object')
    assert.strictEqual(typeof(listProducts[1]), 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(listProducts[0], listProducts[1])
    // Teste que os dois productIds terminam com 123.
    const id0 = parseInt(listProducts[0].details.productId.substr(-3))
    const id1 = parseInt(listProducts[1].details.productId.substr(-3))
    assert.strictEqual(id0, 123)
    assert.strictEqual(id1, 123)
  });
});

const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  test('com o argumento "count", deve retornar o numero inteiro 4', () => {
    const expected = 4;

    expect(handlerElephants('count')).toStrictEqual(expected);
  });

  test('com o argumento "names", deve retornar um array de nomes que possui o nome "Jefferson"', () => {
    const expected = 'Jefferson';

    expect(handlerElephants('names')).toContainEqual(expected);
  });

  test('com o argumento "averageAge", deve retornar um número próximo a "10.5"', () => {
    const expected = 10.5;

    expect(handlerElephants('averageAge')).toBeCloseTo(expected);
  });

  test('com o argumento "location", deve retornar a string "NW"', () => {
    const expected = 'NW';

    expect(handlerElephants('location')).toStrictEqual(expected);
  });

  test('com o argumento "popularity", deve retornar um número igual ou maior a "5"', () => {
    const expected = 5;

    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(expected);
  });

  test('com o argumento "availability", deve retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(Array.isArray(handlerElephants('availability'))).toBeTruthy();
  });

  test('sem argumento, a funcao deve retornar "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('passando por argumento um objeto vazio (\'{}\') deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(handlerElephants({})).toStrictEqual(expected);
  });

  test('passada uma string que não contempla uma funcionalidade deve retornar "null"', () => {
    expect(handlerElephants('array')).toBeNull();
  });
});

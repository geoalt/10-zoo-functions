const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('sem parametros, retorna os horarios de todos os dias da semana', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toStrictEqual(expected);
  });

  test('com os argumentos "Monday" e "09:00-AM", deve retornar "The zoo is closed"', () => {
    const expected = 'The zoo is closed';

    expect(getOpeningHours('Monday', '09:00-AM')).toStrictEqual(expected);
  });

  test('com os argumentos "Tuesday" e "09:00-AM", deve retornar "The zoo is open"', () => {
    const expected = 'The zoo is open';

    expect(getOpeningHours('Tuesday', '09:00-AM')).toStrictEqual(expected);
  });

  test('com os argumentos "Wednesday" e "09:00-PM", deve retornar "The zoo is closed"', () => {
    const expected = 'The zoo is closed';

    expect(getOpeningHours('Wednesday', '09:00-PM')).toStrictEqual(expected);
  });

  test('com os argumentos "Thu" e "09:00-AM", deve retornar o erro "The day must be valid. Example: Monday"', () => {
    const expected = 'The day must be valid. Example: Monday';
    try {
      getOpeningHours('Thu', '09:00-PM');
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  test('com os argumentos "Friday" e "09:00-ZM", deve retornar o erro "The abbreviation must be \'AM\' or \'PM\'"', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    try {
      getOpeningHours('Friday', '09:00-ZM');
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  test('com os argumentos "Saturday" e "C9:00-AM", deve retornar o erro "The hour should represent a number"', () => {
    const expected = 'The hour should represent a number';
    try {
      getOpeningHours('Saturday', 'C9:00-AM');
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  test('com os argumentos "Sunday" e "09:c0-AM", deve retornar o erro "The minutes should represent a number"', () => {
    const expected = 'The minutes should represent a number';
    try {
      getOpeningHours('Sunday', '09:c0-AM');
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  test('com os argumentos "Monday" e "13:00-AM", deve retornar o erro "The hour must be between 0 and 12"', () => {
    const expected = 'The hour must be between 0 and 12';
    try {
      getOpeningHours('Monday', '13:00-AM');
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  test('com os argumentos "Tuesday" e "09:60-AM", deve retornar o erro "The minutes must be between 0 and 59"', () => {
    const expected = 'The minutes must be between 0 and 59';
    try {
      getOpeningHours('Tuesday', '09:60-AM');
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });
});

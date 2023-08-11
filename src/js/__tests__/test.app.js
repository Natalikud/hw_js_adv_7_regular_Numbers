import replaceSymbol from '../app';

test('testing replaceSymbol', () => {
  const number = '8 (927) 000-00-00';
  const res = replaceSymbol(number);
  expect(res).toBe('+79270000000');
});

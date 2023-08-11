import replaceSymbol from '../app';

const numersList = [
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
];

const handler = test.each(numersList);

handler('testing replaceSymbol with %n number and %e expected', (number, expected) => {
  const result = replaceSymbol(number);
  expect(result).toBe(expected);
});

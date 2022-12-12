const combinationOK = require('./script');

test('Retourne des infos concernants les couleurs proposées', () => {
  expect(combinationOK(blue, blue, red, orange)).toBe(true);
});
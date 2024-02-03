const moneyFormatBR = require('../src/index')

test('check formatting', () => {
  const value = 10

  expect(moneyFormatBR(value)).toEqual(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
})

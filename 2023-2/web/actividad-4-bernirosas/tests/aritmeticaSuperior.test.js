const { exponente, exponenteX} = require('../src/aritmeticaSuperior.js')


test('Exponente correcto entre dos números', () => {
  expect(exponente(3, 2)).toBe(9)
  expect(exponente(6, 2)).toBe(36)
  expect(exponente(-6, 3)).toBe(-216)
  expect(exponente(2, -1)).toBe(0.5) // se comprueba que no funciona para negativos
  expect(exponente(6, 0)).toBe(1)
  expect(exponente(8, 1/3)).toBe(2)
  expect(exponente(1/8, 1/3)).toBe(0.5)
  expect(exponente(1/8, -1/3)).toBe(2)
})

test('ExponenteX correcto entre dos números', () => {
    expect(exponenteX(3, 2)).toBe(9)
    expect(exponenteX(6, 2)).toBe(36)
    expect(exponenteX(-6, -3)).toBe(-216)
    expect(exponenteX(2, -1)).toBe(0.5)
    expect(exponenteX(6, 0)).toBe(1)
    expect(exponenteX(8, 1/3)).toBe(2)
    expect(exponenteX(1/8, 1/3)).toBe(0.5)
    expect(exponenteX(1/8, -1/3)).toBe(2)
    })
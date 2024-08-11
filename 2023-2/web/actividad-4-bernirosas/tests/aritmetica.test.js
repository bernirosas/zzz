// código en base a https://ktest("gets a todo object with the right properties", async () = > {


const { suma, resta, restaNatural , division, multiplica, multiplicaAsinc} = require('../src/aritmetica.js')


test('Suma correctamente dos números', () => {
    expect(suma(3, 2)).toBe(5)
    expect(suma(-2, 1)).toBe(-1)
    expect(suma(8, -8)).toBe(0)
    expect(suma(-1, -2)).toBe(-3)
    expect(suma(-1, 0)).toBe(-1)
    expect(suma(0, 0)).toBe(0)
    expect(suma(2/3, 1/3)).toBe(1)
  })

test('Resta correctamente dos números', () => {
  expect(resta(3, 2)).toBe(1)
  expect(resta(-2, 1)).toBe(-3)
  expect(resta(8, -8)).toBe(16)
  expect(resta(-1, -2)).toBe(1)
  expect(resta(-1, 0)).toBe(-1)
  expect(resta(0, 0)).toBe(0)
  expect(resta(2/3, 1/3)).toBe(1/3)
})

test('RestaNatural correcta entre dos números', () => {
  expect(restaNatural(3, 2)).toBe(1)
  expect(restaNatural(-2, 1)).toBe(0)
  expect(restaNatural(8, -8)).toBe(16)
  expect(restaNatural(5, 7)).toBe(0)
  expect(restaNatural(0, 0)).toBe(0)
  expect(resta(0, 0)).toBe(0)
  expect(resta(2/3, 1/3)).toBe(1/3)
})

test('División correcta entre dos números', () => {
  expect(division(3, 2)).toBe(1.5)
  expect(division(6, 2)).toBe(3)
  expect(division(-6, -3)).toBe(2)
  expect(division(6, -3)).toBe(-2)
  expect(division(6, 0)).toBe("Error")
  expect(division(6, 1/6)).toBe(36)
  expect(division(1/6, 6)).toBe(1/36)
})

test('Multiplicación correcta entre dos números', () => {
  expect(multiplica(3, 2)).toBe(6)
  expect(multiplica(6, 2)).toBe(12)
  expect(multiplica(-6, -3)).toBe(18)
  expect(multiplica(6, -3)).toBe(-18)
  expect(multiplica(6, 0)).toBe(0)
  expect(multiplica(6, 1/6)).toBe(1)
  expect(multiplica(1/6, 6)).toBe(1)
})


test("Multiplicación asíncrona correcta entre dos números", async () => {
  const response_1 = await multiplicaAsinc(2, 3)
  expect(response_1).toBe(6)
  const response_2 = await multiplicaAsinc(3, 2)
  expect(response_2).toBe(6)
  const response_3 = await multiplicaAsinc(-6, -3)
  expect(response_3).toBe(18)
  const response_4 = await multiplicaAsinc(6, -3)
  expect(response_4).toBe(-18)
  const response_5 = await multiplicaAsinc(6, 0)
  expect(response_5).toBe(0)
})
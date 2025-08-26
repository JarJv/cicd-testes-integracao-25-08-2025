const math = require('../math');
test('soma de 2 + 3 igual a 5', ()=>{
    expect(math.add(2, 3)).toBe(5);
})

test('subtração de 3 - 2 igual a 1', ()=>{
    expect(math.substract(3, 2)).toBe(1);
})

test('Multiplicação de 3 * 2 igual a 6', ()=>{
    expect(math.multiply(3, 2)).toBe(6);
})

test('Divisão de 3 / 2 igual a 1.5', ()=>{
    expect(math.divide(3, 2)).toBe(1.5);
})
const { test, expect } = require('@jest/globals');
const capitalize=require('./ej1');
const inversa=require('./ej1');
const calculadora=require('./ej1');

/*test('Pasamos hola devuelve Hola', ()=>{
    expect(capitalize('hola')).toBe('Hola');
});

test('pasamos adios devuelve Adios', ()=>{
    expect(capitalize('adios')).toBe('Adios');
})*/

/*test('pasamos hola devuelve aloh', ()=>{
    expect(inversa('hola')).toBe('aloh');
})*/

test('Pasamos 2+2 devuelve 4', () => {
    expect(calculadora(2, 2)).toBe(4);
})
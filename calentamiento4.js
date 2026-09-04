// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si es múltiplo de 3
// - "buzz" si es múltiplo de 5
// - "fizzbuzz" si es múltiplo de 3 y de 5
// - El mismo número si no es múltiplo de ninguno
// ==============================================================================

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    }
    return num;
}

// Muy bien priorizada la condición compuesta de divisibilidad al principio.

console.log(fizzBuzz(6));  // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8));  // 8

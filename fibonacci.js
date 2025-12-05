// fibonacci.js
// Implementaciones de Fibonacci: recursiva (simple) y iterativa (eficiente)

function fibonacciRecursive(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('n debe ser un entero no negativo');
  }
  if (n < 0) throw new RangeError('n debe ser no negativo');
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('n debe ser un entero no negativo');
  }
  if (n < 0) throw new RangeError('n debe ser no negativo');
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

module.exports = {
  fibonacciRecursive,
  fibonacciIterative,
};

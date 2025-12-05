# Recursion — ejemplos en JavaScript

Archivos incluidos:


Archivos incluidos:

- `fibonacci.js` — implementa Fibonacci de dos formas:
	- `fibonacciRecursive(n)` — versión recursiva (uso didáctico).
	- `fibonacciIterative(n)` — versión iterativa eficiente.

- `merge_sort.js` — implementación recursiva de `mergeSort(arr)` que devuelve una nueva lista ordenada.

Descripción:

Este repositorio contiene implementaciones sencillas y autocontenidas en JavaScript de algoritmos que ilustran el uso de la recursión: Fibonacci y Merge Sort.

Uso básico (CommonJS / Node.js):

```js
const { fibonacciIterative } = require('./fibonacci');
const { mergeSort } = require('./merge_sort');

console.log(fibonacciIterative(10)); // 55
console.log(mergeSort([5,3,8,1,2,7])); // [1,2,3,5,7,8]
```

Solo contiene el código fuente necesario y documentación mínima sobre lo que hace cada archivo.


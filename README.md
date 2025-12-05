# Recursion — ejemplos en JavaScript

Archivos incluidos:

- `fibonacci.js` — implementaciones de Fibonacci (recursiva e iterativa). Exporta `fibonacciRecursive` y `fibonacciIterative`.
- `merge_sort.js` — implementación recursiva de merge sort. Exporta `mergeSort`.

Uso rápido (Node.js / CommonJS):

```js
const { fibonacciIterative, fibonacciRecursive } = require('./fibonacci');
const { mergeSort } = require('./merge_sort');

console.log(fibonacciIterative(10)); // 55
console.log(fibonacciRecursive(10)); // 55
console.log(mergeSort([5,3,8,1,2,7])); // [1,2,3,5,7,8]
```

Cómo ejecutar:

1. Asegúrate de tener Node.js instalado.
2. Desde la carpeta `Recursion` crea un archivo `demo.js` con el ejemplo anterior o ejecuta el ejemplo en una línea con `node -e`.

Ejemplo rápido en la terminal:

```bash
node -e "const { fibonacciIterative } = require('./fibonacci'); console.log(fibonacciIterative(10));"
```

Notas:

- Si prefieres módulos ES (`import/export`) o que añada un `main.js` de demo, dímelo y lo agrego.

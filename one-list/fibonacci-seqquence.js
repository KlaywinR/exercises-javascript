function fibonacci(n) {
  if (n < 0) {
    throw new Error("n deve ser um número não negativo.");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= n; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

// Versão recursiva
function fibonacciRecursivo(n) {
  if (n < 0) throw new Error("n deve ser um número não negativo.");
  if (n <= 1) return n;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

// teste
for (let i = 0; i <= 10; i++) {
  console.log(`fibonacci(${i}) = ${fibonacci(i)}`);
}

module.exports = { fibonacci, fibonacciRecursivo };
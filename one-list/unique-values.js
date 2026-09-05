function valoresUnicos(numeros) {
  return [...new Set(numeros)];
}

// teste
const numeros = [1, 2, 2, 3, 4, 4, 4, 5, 1, 6];
console.log(`Array original: [${numeros.join(", ")}]`);
console.log(`Valores únicos: [${valoresUnicos(numeros).join(", ")}]`);

module.exports = { valoresUnicos };
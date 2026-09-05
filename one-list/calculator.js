function calcular(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Erro: divisão por zero";
      }
      return a / b;
    default:
      return `Erro: operador inválido "${operador}"`;
  }
}

// testes simples
const operacoes = [
  [10, 5, "+"],
  [10, 5, "-"],
  [10, 5, "*"],
  [10, 5, "/"],
  [10, 0, "/"],
  [10, 5, "%"],
];

operacoes.forEach(([a, b, op]) => {
  console.log(`${a} ${op} ${b} = ${calcular(a, b, op)}`);
});

module.exports = { calcular };
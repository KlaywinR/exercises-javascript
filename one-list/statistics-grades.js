/**
 * Exercício 9
 * Recebe um array de notas de uma turma e retorna um objeto com a
 * média, a maior e a menor nota.
 */

function calcularEstatisticas(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error("O array de notas não pode estar vazio.");
  }

  const soma = notas.reduce((acumulado, nota) => acumulado + nota, 0);
  const media = soma / notas.length;
  const maior = Math.max(...notas);
  const menor = Math.min(...notas);

  return {
    media: Number(media.toFixed(2)),
    maior,
    menor,
  };
}

// teste
const turmas = [
  [7.5, 8.0, 6.5, 9.0, 10, 4.5],
  [10, 10, 10],
  [3, 5, 7, 2, 6],
];

turmas.forEach((notas) => {
  const { media, maior, menor } = calcularEstatisticas(notas);
  console.log(
    `Notas: [${notas.join(", ")}] -> Média: ${media}, Maior: ${maior}, Menor: ${menor}`
  );
});

module.exports = { calcularEstatisticas };
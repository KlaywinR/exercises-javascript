/**
 * Exercício 1
 * A partir de uma duração em segundos, calcula e exibe a quantas
 * horas, minutos e segundos ela equivale.
 * Ex.: 3665 -> 1h 1min 5s
 */

function converterSegundos(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return { horas, minutos, segundos };
}

function formatarDuracao(totalSegundos) {
  const { horas, minutos, segundos } = converterSegundos(totalSegundos);
  return `${horas}h ${minutos}min ${segundos}s`;
}

// teste
const exemplos = [3665, 59, 3600, 7325, 0];

exemplos.forEach((s) => {
  console.log(`${s} segundos -> ${formatarDuracao(s)}`);
});

module.exports = { converterSegundos, formatarDuracao };
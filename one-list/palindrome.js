/**
 * Exercício 8
 * Recebe uma string e retorna se ela é um palíndromo, ignorando
 * maiúsculas/minúsculas e espaços.
 */

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]/g, ""); // remove espaços e pontuação
}

function ehPalindromo(texto) {
  const normalizado = normalizar(texto);
  const invertido = normalizado.split("").reverse().join("");
  return normalizado === invertido;
}

// teste
const frases = [
  "Arara",
  "A sacada da casa",
  "Socorram-me, subi no ônibus em Marrocos",
  "JavaScript",
  "Ame",
];

frases.forEach((frase) => {
  console.log(`"${frase}" -> ${ehPalindromo(frase) ? "é palíndromo" : "não é palíndromo"}`);
});

module.exports = { ehPalindromo, normalizar };
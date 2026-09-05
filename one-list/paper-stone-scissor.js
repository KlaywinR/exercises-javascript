const VENCE_DE = {
  pedra: "tesoura",
  papel: "pedra",
  tesoura: "papel",
};

const JOGADAS_VALIDAS = Object.keys(VENCE_DE);

function jogar(jogador1, jogador2) {
  const j1 = jogador1.toLowerCase();
  const j2 = jogador2.toLowerCase();

  if (!JOGADAS_VALIDAS.includes(j1) || !JOGADAS_VALIDAS.includes(j2)) {
    return "Erro: jogada inválida. Use pedra, papel ou tesoura.";
  }

  if (j1 === j2) {
    return "Empate";
  }

  if (VENCE_DE[j1] === j2) {
    return "Jogador 1 venceu";
  }

  return "Jogador 2 venceu";
}

// teste
const partidas = [
  ["pedra", "tesoura"],
  ["papel", "pedra"],
  ["tesoura", "papel"],
  ["pedra", "papel"],
  ["papel", "papel"],
];

partidas.forEach(([j1, j2]) => {
  console.log(`${j1} vs ${j2} -> ${jogar(j1, j2)}`);
});

module.exports = { jogar };
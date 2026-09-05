function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(peso, altura) {
  const imc = calcularIMC(peso, altura);

  let classificacao;
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  return { imc: Number(imc.toFixed(2)), classificacao };
}

// teste
const pessoas = [
  { peso: 50, altura: 1.70 },
  { peso: 65, altura: 1.70 },
  { peso: 80, altura: 1.70 },
  { peso: 100, altura: 1.70 },
];

pessoas.forEach(({ peso, altura }) => {
  const { imc, classificacao } = classificarIMC(peso, altura);
  console.log(`Peso: ${peso}kg, Altura: ${altura}m -> IMC ${imc} (${classificacao})`);
});

module.exports = { calcularIMC, classificarIMC };
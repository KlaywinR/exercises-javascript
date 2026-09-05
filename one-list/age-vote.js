function analisarSituacao(anoNascimento, anoAtual = new Date().getFullYear()) {
  const idade = anoAtual - anoNascimento;

  const podeVotar = idade >= 16;
  const votoObrigatorio = idade >= 18 && idade <= 69;
  const isentoServicoMilitar = idade < 18 || idade > 45;

  return { idade, podeVotar, votoObrigatorio, isentoServicoMilitar };
}

function formatarSituacao(anoNascimento, anoAtual) {
  const { idade, podeVotar, votoObrigatorio, isentoServicoMilitar } =
    analisarSituacao(anoNascimento, anoAtual);

  return `
Ano de nascimento: ${anoNascimento}
Idade: ${idade} anos
Pode votar? ${podeVotar ? "Sim" : "Não"}
Voto obrigatório? ${votoObrigatorio ? "Sim" : "Não"}
Isento do serviço militar? ${isentoServicoMilitar ? "Sim" : "Não"}
`.trim();
}

// testes
const anosNascimento = [2015, 2009, 2007, 1995, 1975, 1950];

anosNascimento.forEach((ano) => {
  console.log(formatarSituacao(ano));
  console.log();
});

module.exports = { analisarSituacao, formatarSituacao };
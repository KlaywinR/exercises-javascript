/**
 * Exercício 13
 * Agenda de contatos modelada como array de objetos (nome, telefone
 * e categoria), com funções para adicionar, remover pelo nome e
 * listar contatos de uma categoria.
 */

function criarAgenda() {
  return [];
}

function adicionarContato(agenda, nome, telefone, categoria) {
  agenda.push({ nome, telefone, categoria });
  return agenda;
}

function removerContatoPorNome(agenda, nome) {
  const indice = agenda.findIndex((contato) => contato.nome === nome);
  if (indice === -1) {
    console.log(`Contato "${nome}" não encontrado.`);
    return agenda;
  }
  agenda.splice(indice, 1);
  return agenda;
}

function listarContatosPorCategoria(agenda, categoria) {
  return agenda.filter((contato) => contato.categoria === categoria);
}

// testes
let agenda = criarAgenda();

adicionarContato(agenda, "Ana", "84 99999-0001", "Família");
adicionarContato(agenda, "Bruno", "84 99999-0002", "Trabalho");
adicionarContato(agenda, "Carla", "84 99999-0003", "Amigos");
adicionarContato(agenda, "Diego", "84 99999-0004", "Trabalho");

console.log("Agenda completa:", agenda);

console.log("Contatos de Trabalho:", listarContatosPorCategoria(agenda, "Trabalho"));

removerContatoPorNome(agenda, "Bruno");
console.log("Agenda após remover Bruno:", agenda);

module.exports = {
  criarAgenda,
  adicionarContato,
  removerContatoPorNome,
  listarContatosPorCategoria,
};
class AgendaContatos {
  constructor() {
    this.contatos = [];
  }

  adicionar(nome, telefone, categoria) {
    this.contatos.push({ nome, telefone, categoria });
    return this.contatos;
  }

  removerPorNome(nome) {
    const indice = this.contatos.findIndex((contato) => contato.nome === nome);
    if (indice === -1) {
      console.log(`Contato "${nome}" não encontrado.`);
      return this.contatos;
    }
    this.contatos.splice(indice, 1);
    return this.contatos;
  }

  listarPorCategoria(categoria) {
    return this.contatos.filter((contato) => contato.categoria === categoria);
  }

  listarTodos() {
    return this.contatos;
  }
}
// testse
const agenda = new AgendaContatos();

agenda.adicionar("Ana", "84 99999-0001", "Família");
agenda.adicionar("Bruno", "84 99999-0002", "Trabalho");
agenda.adicionar("Carla", "84 99999-0003", "Amigos");
agenda.adicionar("Diego", "84 99999-0004", "Trabalho");

console.log("Agenda completa:", agenda.listarTodos());
console.log("Contatos de Trabalho:", agenda.listarPorCategoria("Trabalho"));

agenda.removerPorNome("Bruno");
console.log("Agenda após remover Bruno:", agenda.listarTodos());

/**
 * Comparação: versão com array de funções - exemplo 13
 * ----------------------------------------------------------------
 * - Encapsulamento: na versão com classe, os dados (this.contatos)
 *   ficam encapsulados dentro do objeto, em vez de ser um array
 *   solto que qualquer função externa manipula diretamente. Isso
 *   deixa mais claro quem é "dono" do estado.
 *
 * - Organização: na versão com classe, dados e comportamentos
 *   relacionados ficam agrupados em um único lugar (a classe),
 *   facilitando localizar e manter o código. Na versão com array
 *   de objetos, as funções ficam soltas no módulo e é preciso
 *   sempre lembrar de passar o array correto como argumento.
 *
 * - Desvantagem da classe: para casos muito simples, a classe
 *   adiciona um pouco mais de "cerimônia" (constructor, this) do
 *   que simplesmente usar um array e funções puras, que também são
 *   mais fáceis de testar isoladamente sem precisar instanciar nada.
 *
 * Em resumo: para uma agenda de contatos que cresce (mais campos,
 * mais regras de negócio), a versão com classe tende a ficar mais
 * organizada e escalável. Para operações simples e pontuais, a
 * versão funcional com array de objetos é mais direta.
 */

module.exports = { AgendaContatos };
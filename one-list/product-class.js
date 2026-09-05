class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  aplicarDesconto(percentual) {
    const valorDesconto = this.preco * (percentual / 100);
    this.preco -= valorDesconto;
    return this.preco;
  }

  disponivel() {
    return this.quantidade > 0;
  }

  toString() {
    return `${this.nome} - R$ ${this.preco.toFixed(2)} (${this.quantidade} un.)`;
  }
}

// teste
const produto1 = new Produto("Notebook", 3500, 4);
const produto2 = new Produto("Cadeira Gamer", 899.9, 0);
const produto3 = new Produto("Fone Bluetooth", 199.9, 15);

console.log(produto1.toString());
console.log(`Disponível? ${produto1.disponivel()}`);

console.log(produto2.toString());
console.log(`Disponível? ${produto2.disponivel()}`);

produto3.aplicarDesconto(20);
console.log(`Fone com 20% de desconto: ${produto3.toString()}`);
console.log(`Disponível? ${produto3.disponivel()}`);

module.exports = { Produto };
function valorTotalEstoque(produtos) {
  return produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );
}

function produtoMaisCaro(produtos) {
  if (produtos.length === 0) return null;
  return produtos.reduce((maisCaro, produto) =>
    produto.preco > maisCaro.preco ? produto : maisCaro
  );
}

function produtosAbaixoDoMinimo(produtos, minimo) {
  return produtos.filter((produto) => produto.quantidade < minimo);
}

// teste
const estoque = [
  { nome: "Mouse", preco: 45.9, quantidade: 20 },
  { nome: "Teclado", preco: 120.0, quantidade: 3 },
  { nome: "Monitor", preco: 899.9, quantidade: 5 },
  { nome: "Cabo HDMI", preco: 25.0, quantidade: 1 },
  { nome: "Headset", preco: 199.9, quantidade: 8 },
];

console.log(`Valor total do estoque: R$ ${valorTotalEstoque(estoque).toFixed(2)}`);

const maisCaro = produtoMaisCaro(estoque);
console.log(`Produto mais caro: ${maisCaro.nome} (R$ ${maisCaro.preco.toFixed(2)})`);

const minimo = 5;
const baixoEstoque = produtosAbaixoDoMinimo(estoque, minimo);
console.log(`Produtos com quantidade abaixo de ${minimo}:`);
baixoEstoque.forEach((p) => console.log(`  - ${p.nome} (qtd: ${p.quantidade})`));

module.exports = { valorTotalEstoque, produtoMaisCaro, produtosAbaixoDoMinimo };
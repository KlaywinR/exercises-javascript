function calculateDiscount(subtotal) {
  if (subtotal > 300) return 0.10;
  if (subtotal > 100) return 0.05;
  return 0;
}

function generateSummaryAbstract(price, quantity) {
  const subtotal = price * quantity;
  const Discount_percentage = calculateDiscount(subtotal);
  const Discount_value = subtotal * Discount_percentage;
  const total = subtotal - Discount_value;

  const abstract = `
Resumo do Pedido
----------------
Preço unitário : R$ ${preco.toFixed(2)}
Quantidade     : ${quantity}
Subtotal       : R$ ${subtotal.toFixed(2)}
Desconto       : ${(Discount_percentage * 100).toFixed(0)}% (R$ ${Discount_value.toFixed(2)})
Total a pagar  : R$ ${total.toFixed(2)}
`.trim();

  return { subtotal, Discount_percentage, Discount_value, total, abstract };
}

const pedidos = [
  { preco: 20, quantidade: 3 },   
  { preco: 50, quantidade: 3 },   
  { preco: 100, quantidade: 4 },  
];

pedidos.forEach(({ price, quantity }) => {
  const { abstract } = generateSummaryAbstract(price, quantity);
  console.log(abstract);
  console.log();
});

module.exports = { calculateDiscount, generateSummaryAbstract };
class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Erro: valor de depósito deve ser positivo.");
      return this.saldo;
    }
    this.saldo += valor;
    return this.saldo;
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Erro: valor de saque deve ser positivo.");
      return this.saldo;
    }
    if (valor > this.saldo) {
      console.log(`Erro: saldo insuficiente para ${this.titular} sacar R$ ${valor.toFixed(2)}.`);
      return this.saldo;
    }
    this.saldo -= valor;
    return this.saldo;
  }

  extrato() {
    return `Titular: ${this.titular} | Saldo atual: R$ ${this.saldo.toFixed(2)}`;
  }
}

// Demonstração: simulando operações entre duas contas
const contaAna = new ContaBancaria("Ana", 500);
const contaBruno = new ContaBancaria("Bruno", 100);

console.log(contaAna.extrato());
console.log(contaBruno.extrato());

console.log("\n--- Operações ---");
contaAna.sacar(150); // Ana saca 150
contaBruno.depositar(150); // Bruno recebe os 150 (simulando uma transferência)

contaBruno.sacar(1000); // saque inválido, saldo insuficiente
contaAna.depositar(-50); // depósito inválido

console.log("\n--- Extratos finais ---");
console.log(contaAna.extrato());
console.log(contaBruno.extrato());

module.exports = { ContaBancaria };
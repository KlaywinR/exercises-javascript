# JavaScript Exercises

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-runtime-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Exercícios-18-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/status-concluído-success?style=for-the-badge" />
</p>

<p align="center">
Uma coleção de 18 exercícios de lógica de programação e JavaScript,
organizados por tema, cada um em seu próprio arquivo — pronto para rodar,
ler e estudar.
</p>

---

##  Como executar?

Cada arquivo é independente e roda direto com o Node.js:

```bash
node 01-conversor-tempo.js
```

> Pré-requisito: ter o [Node.js](https://nodejs.org) instalado (`node -v` para conferir).

Todos os arquivos também exportam suas funções com `module.exports`,
então dá pra importar em outro script ou em testes:

```js
const { fibonacci } = require("./10-fibonacci.js");
console.log(fibonacci(12)); // 144
```

---

## Exercícios por categoria

<details>
<summary><strong> Fundamentos (1–6)</strong></summary>

### 1.  Conversor de tempo
Converte uma duração em segundos para `h min s`.

```js
formatarDuracao(3665); // "1h 1min 5s"
```
```text
3665 segundos -> 1h 1min 5s
3600 segundos -> 1h 0min 0s
```

### 2.  Conversor de temperatura
Converte Celsius para Fahrenheit e Kelvin.

```js
converterTemperatura(25); // { celsius: 25, fahrenheit: 77, kelvin: 298.15 }
```
```text
0°C   -> 32.00°F  | 273.15K
100°C -> 212.00°F | 373.15K
```

### 3.  Resumo de pedido
Calcula subtotal, aplica desconto progressivo (5% acima de R$100,
10% acima de R$300) e monta um resumo com template literals.

```text
Resumo do Pedido
----------------
Preço unitário : R$ 100.00
Quantidade     : 4
Subtotal       : R$ 400.00
Desconto       : 10% (R$ 40.00)
Total a pagar  : R$ 360.00
```

### 4.  Idade, voto e serviço militar
A partir do ano de nascimento, combina operadores lógicos e de
comparação para dizer se a pessoa pode votar, se o voto é
obrigatório e se ela está isenta do serviço militar.

```text
Ano de nascimento: 2007
Idade: 19 anos
Pode votar? Sim
Voto obrigatório? Sim
Isento do serviço militar? Não
```

### 5. Calculadora
Recebe dois números e um operador, usa `switch/case` e trata
operador inválido e divisão por zero.

```text
10 / 0 = Erro: divisão por zero
10 % 5 = Erro: operador inválido "%"
```

### 6. Classificação de IMC
Recebe peso e altura e classifica nas faixas usuais.

```text
Peso: 80kg, Altura: 1.7m -> IMC 27.68 (Sobrepeso)
```

</details>

<details>
<summary><strong> Lógica e funções (7–11)</strong></summary>

### 7.  Pedra, Papel e Tesoura
Em vez de repetir a mesma comparação três vezes, usa uma tabela
de "o que vence o quê" consultada dinamicamente.

```js
const VENCE_DE = { pedra: "tesoura", papel: "pedra", tesoura: "papel" };
```
```text
pedra vs papel -> Jogador 2 venceu
papel vs papel -> Empate
```

### 8.  Palíndromo
Ignora maiúsculas/minúsculas, espaços e acentos.

```text
"Socorram-me, subi no ônibus em Marrocos" -> é palíndromo
"JavaScript" -> não é palíndromo
```

### 9.  Estatísticas de notas
Retorna média, maior e menor nota de uma turma.

```text
Notas: [7.5, 8, 6.5, 9, 10, 4.5] -> Média: 7.58, Maior: 10, Menor: 4.5
```

### 10.  Fibonacci
Implementação iterativa (O(n)) — inclui também uma versão
recursiva para comparação didática.

```text
fibonacci(10) = 55
```

### 11.  Validador de senha
Retorna quais regras a senha não cumpre (8+ caracteres, maiúscula,
número).

```text
Senha "senha123": inválida
  - A senha deve ter ao menos uma letra maiúscula.
```

</details>

<details>
<summary><strong> Coleções e arrays de objetos (12–13b)</strong></summary>

### 12.  Controle de estoque
Valor total do estoque, produto mais caro e produtos abaixo de um
mínimo de quantidade.

```text
Valor total do estoque: R$ 7401.70
Produto mais caro: Monitor (R$ 899.90)
Produtos com quantidade abaixo de 5:
  - Teclado (qtd: 3)
  - Cabo HDMI (qtd: 1)
```

### 13.  Agenda de contatos (array)
Funções para adicionar, remover por nome e listar por categoria.

```text
Contatos de Trabalho: [
  { nome: 'Bruno', telefone: '84 99999-0002', categoria: 'Trabalho' },
  { nome: 'Diego', telefone: '84 99999-0004', categoria: 'Trabalho' }
]
```

### 13b.  Valores únicos
Remove duplicatas de um array de números usando `Set`.

```text
Array original: [1, 2, 2, 3, 4, 4, 4, 5, 1, 6]
Valores únicos: [1, 2, 3, 4, 5, 6]
```

</details>

<details>
<summary><strong> Programação Orientada a Objetos (14–17)</strong></summary>

### 14. Classe `Produto`
Métodos `aplicarDesconto(percentual)` e `disponivel()`.

```text
Fone com 20% de desconto: Fone Bluetooth - R$ 159.92 (15 un.)
Disponível? true
```

### 15. Classe `ContaBancaria`
`depositar()`, `sacar()` (sem permitir saldo negativo) e
`extrato()`.

```text
Erro: saldo insuficiente para Bruno sacar R$ 1000.00.
Titular: Ana | Saldo atual: R$ 350.00
Titular: Bruno | Saldo atual: R$ 250.00
```

### 16.  Classe `Retangulo`
Área e perímetro.

```text
Retângulo 4x5 -> Área: 20, Perímetro: 18
```

### 17.  Agenda de contatos com classe + comparação
Reescrita do exercício 13 como classe `AgendaContatos`, com um
comentário comparando as duas abordagens (array de funções vs.
classe): a versão com classe encapsula o estado (`this.contatos`)
e deixa o uso mais legível (`agenda.adicionar(...)`), enquanto a
versão funcional é mais simples para casos pontuais.

</details>

---

## Convenções 

- Cada arquivo é **autoexecutável**: já traz uma seção de demonstração
  com `console.log` mostrando exemplos reais de entrada e saída.
- Todas as funções são exportadas via `module.exports`, para reuso e testes.
- Nomes de variáveis, funções e comentários em **português**, seguindo
  o enunciado dos exercícios.
- Tratamento de erros feito de forma explícita (operador inválido,
  divisão por zero, saldo insuficiente, senha fraca etc.), sem `try/catch`
  desnecessário.

---

function validarSenha(senha) {
  const regrasNaoCumpridas = [];

  if (senha.length < 8) {
    regrasNaoCumpridas.push("A senha deve ter no mínimo 8 caracteres.");
  }

  if (!/[A-Z]/.test(senha)) {
    regrasNaoCumpridas.push("A senha deve ter ao menos uma letra maiúscula.");
  }

  if (!/[0-9]/.test(senha)) {
    regrasNaoCumpridas.push("A senha deve ter ao menos um número.");
  }

  return {
    valida: regrasNaoCumpridas.length === 0,
    regrasNaoCumpridas,
  };
}

// tteste
const senhas = ["123", "senha123", "Senha123", "SENHASEGURA", "abc12345"];

senhas.forEach((senha) => {
  const { valida, regrasNaoCumpridas } = validarSenha(senha);
  console.log(`Senha "${senha}": ${valida ? "válida" : "inválida"}`);
  regrasNaoCumpridas.forEach((regra) => console.log(`  - ${regra}`));
});

module.exports = { validarSenha };
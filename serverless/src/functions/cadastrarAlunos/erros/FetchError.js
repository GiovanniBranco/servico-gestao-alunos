class FetchErro extends Error {
  constructor(statusCode, aluno) {
    super("Código HTTP não esperado");
    this.statusCode = statusCode;
    this.aluno = aluno;
  }
}

module.exports = { FetchErro };

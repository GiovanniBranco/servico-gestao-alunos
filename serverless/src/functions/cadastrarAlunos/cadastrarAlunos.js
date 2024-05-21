const config = require("../../../config/config.json");
const { fetchApi } = require("../../../utils/fetchHelpers");
const { buildEmail } = require("../../../utils/buildEmail");
const { emailConfirmaProducer } = require("../producers/emailConfirmaProducer");

const { FetchErro } = require("./erros/FetchError");

module.exports.cadastrarAlunos = async (aluno) => {
  try {
    const response = await fetchApi(
      `${config.fetchApi.prod}/alunos`,
      "POST",
      "application/json",
      aluno
    );

    const objAluno = JSON.parse(aluno);

    if (response.statusCode === 201)
      await emailConfirmaProducer(
        buildEmail(
          objAluno.email,
          `Cadastro de ${objAluno.nome} na plataforma`,
          `Cadastro do email ${objAluno.nome} foi feito com sucesso`
        )
      );

    throw new FetchErro(response.statusCode, aluno);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const config = require("../../../config/config.json");
const { fetchApi, buildResponse } = require("../../../utils/fetchHelpers");

module.exports.cadastroAlunos = async (aluno) => {
  try {
    const chamadaApi = await fetchApi(
      `${config.fetchApi.prod}/alunos`,
      "POST",
      "application/json",
      aluno
    );

    const response = buildResponse(
      chamadaApi.statusCode,
      chamadaApi.body,
      chamadaApi.headers
    );

    if (response.statusCode === 201)
      return {
        mensagem: "Cadastro realizado com sucesso",
        status: response.statusCode,
      };

    return {
      mensagem: "Falha no cadastro",
      status: response.statusCode,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

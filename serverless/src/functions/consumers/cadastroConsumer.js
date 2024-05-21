const {cadastrarAlunos} = require("../cadastrarAlunos/cadastrarAlunos");

module.exports.cadastroConsumer = async (event) => {
  console.log(event);
  try {
    const { body } = event.Records[0];

    await cadastrarAlunos(body);
  } catch (error) {
    console.error("Falha no envio para o cadastro");
    throw error;
  }
};

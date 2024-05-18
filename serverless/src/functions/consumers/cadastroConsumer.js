const { cadastroAlunos } = require("../cadastroAlunos/cadastroAlunos");

module.exports.cadastroConsumer = async (event) => {
  try {
    const { body } = event.Records[0];

    await cadastroAlunos(body);
  } catch (error) {
    console.error("Falha no envio para o cadastro");
    console.error(error);
  }
};

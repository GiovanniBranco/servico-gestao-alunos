const { buildEmail } = require("../../../utils/buildEmail");
const { emailConfirmaProducer } = require("../producers/emailConfirmaProducer");

module.exports.trataErrosCadastroConsumer = async (event) => {
  const { body } = event.Records[0];

  const aluno = JSON.parse(body);

  await emailConfirmaProducer(
    buildEmail(
      "admin@plataforma.com",
      `Falha ao cadastrar o aluno ${aluno.nome}`,
      `O cadastro do email ${aluno.email} não foi concluído`
    )
  );
};

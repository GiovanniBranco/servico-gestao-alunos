const nodemailer = require("nodemailer");

const emailTransport = () => {
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "roman36@ethereal.email",
      pass: "f8ZC6Z8tmR8WPhEQkG",
    },
  });
};

module.exports.enviaEmailNoCadastro = async (event) => {
  const body = JSON.parse(event.Records[0].body);

  const transport = emailTransport();

  await transport.sendMail({
    from: "roman36@ethereal.email",
    to: body.to,
    subject: body.subject,
    text: body.text,
  });
};

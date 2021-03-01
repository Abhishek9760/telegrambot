const axios = require("axios");

module.exports = (bot) => {
  bot.command(["riddle", "riddle@cutio_bot"], async (ctx) => {
    return await axios
      .get("https://abhi101.pythonanywhere.com/api/riddles")
      .then(async (res) => {
        data = res.data;
        if (data) {
          let question = data.question;
          let heading = data.heading;
          let category = data.category;
          let msg = `
<b>${heading}(<em>${category}</em>)</b>

${question}
`;
          bot.telegram.sendMessage(ctx.chat.id, msg, {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [[{ text: "Answer", callback_data: "answer" }]],
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  bot.action("answer", async (ctx) => {
    let heading = ctx.update.callback_query.message.text
      .split("\n")[0]
      .split("(")[0];
    return await axios
      .get(`https://abhi101.pythonanywhere.com/api/riddles?q=${heading}`)
      .then((res) => {
        let data = res.data;
        if (data) {
          ctx.reply(`Answer:\n\n${data.answer}`);
          ctx.answerCbQuery();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

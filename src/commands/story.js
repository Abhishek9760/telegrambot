let axios = require("axios");

module.exports = (bot) => {
  bot.command(["story", "story@cutio_bot"], async (ctx) => {
    return await axios
      .get("https://abhi101.pythonanywhere.com/api/stories")
      .then((res) => {
        let data = res.data;
        if (data) {
          let msg = `
<b>${data.heading}</b>

${data.story}
`;
          ctx.reply(msg, {
            parse_mode: "HTML",
          });
        }
      })
      .catch((err) => console.log(err));
  });
};

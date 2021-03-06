const axios = require("axios");

module.exports = (bot) => {
  bot.command(
    ["quote", "quote@cutio_bot"],
    (f = (ctx) => {
      axios
        .get("https://abhi101.pythonanywhere.com/api/quotes")
        .then((res) => {
          let data = res.data;
          if (data && data.text && data.author) {
            let msg = `
${data.text}

By - ${data.author}
`;
            ctx.reply(msg, {
              parse_mode: "HTML",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
  );
};

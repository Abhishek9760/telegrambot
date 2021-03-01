module.exports = (bot) => {
  bot.command(["gn", "gn@cutio_bot"], (ctx) => {
    if (ctx.message.from.id == "1312784508") {
      ctx.reply("Good night baby😉😙\nSleep tight ok");
    }
  });
};

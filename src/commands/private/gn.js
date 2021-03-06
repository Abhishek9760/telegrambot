module.exports = (bot) => {
  bot.command(["gn", "gn@cutio_bot"], (ctx) => {
    console.log(ctx.message);
    if (
      ctx.message.from.id === 1312784508 ||
      ctx.message.from.id === 1138438767
    ) {
      ctx.reply("Good night baby😉😙\nSleep tight ok");
    }
  });
};

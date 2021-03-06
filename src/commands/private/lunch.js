module.exports = (bot) => {
  bot.command(["l", "l@cutio_bot"], (ctx) => {
    if (
      ctx.message.from.id === 1312784508 ||
      ctx.message.from.id === 1138438767
    ) {
      ctx.reply("Baby lunch kiya👀");
    }
  });
};

module.exports = (bot) => {
  bot.command(["d", "d@cutio_bot"], (ctx) => {
    console.log(ctx.message.from.id);
    if (
      ctx.message.from.id === 1312784508 ||
      ctx.message.from.id === 1138438767
    ) {
      ctx.reply("Baby dinner kiya👀");
    }
  });
};

module.exports = (bot) => {
  bot.command(["bf", "bf@cutio_bot"], (ctx) => {
    if (ctx.message.from.id == "1312784508") {
      ctx.reply("Baby bf kiya👀");
    }
  });
};

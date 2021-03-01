module.exports = (bot) => {
  bot.command("baby", (ctx) => {
    if (ctx.message.from.id == "1312784508") {
      ctx.reply("Baby sunoo naa😚");
    }
  });
};

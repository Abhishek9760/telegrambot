module.exports = (bot) => {
  bot.command("d", (ctx) => {
    console.log(ctx.message.from.id);
    if (ctx.message.from.id == "1312784508") {
      ctx.reply("Baby dinner kiya👀");
    }
  });
};

module.exports = (bot) => {
  bot.command(
    "dice",
    (f = (ctx) => {
      console.log(ctx.message.chat);
      bot.telegram.sendDice(ctx.chat.id);
    })
  );
};

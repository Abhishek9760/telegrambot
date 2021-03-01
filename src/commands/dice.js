module.exports = (bot) => {
  bot.command(
    ["dice", "dice@cutio_bot"],
    (f = (ctx) => {
      bot.telegram.sendDice(ctx.chat.id);
    })
  );
};

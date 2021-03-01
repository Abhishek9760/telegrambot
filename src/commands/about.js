module.exports = (bot) => {
  bot.command(["about", "about@cutio_bot"], (ctx) => {
    msg = "I am developed by @abhiVerma200\n and still under development.";
    ctx.reply(msg);
  });
};

module.exports = (bot) => {
  bot.command("about", (ctx) => {
    msg = "I am developed by @abhiVerma200\n and still under development.";
    ctx.reply(msg);
  });
};

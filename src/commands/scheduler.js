const axios = require("axios");

async function scheduler(bot) {
  bot.context.counter = bot.context.counter || 0;
  bot.context.counter++;
  const msg = await axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => res.data.slip.advice);

  const res = bot.telegram.sendMessage(
    -1001272663785,
    `Good Morning everyone😊\nToday's advice is - \n\n${msg}`
  );
}

function counter(bot) {
  bot.command(["count", "count@cutio_bot"], async (ctx) => {
    const data = await ctx.getChat();
    if (data.id != -1001272663785) {
      return;
    }
    let input = ctx.message.text.toLowerCase();
    let inputArray = input.split(" ");
    if (inputArray.length === 2 && inputArray[1] == "r") {
      bot.context.counter = 0;
      return ctx.reply("counter reset successfully");
    } else if (
      inputArray.length === 3 &&
      inputArray[1] == "s" &&
      typeof parseInt(inputArray[2]) == "number"
    ) {
      bot.context.counter = inputArray[2];
      return ctx.reply(`counter set to ${bot.context.counter}`);
    }
    bot.context.counter = bot.context.counter || 0;
    ctx.reply(bot.context.counter);
  });
}

module.exports = {
  scheduler,
  counter,
};

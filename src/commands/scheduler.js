const axios = require("axios");

async function scheduler(bot) {
  bot.context.counter = bot.context.counter || 0;
  bot.context.counter++;
  const msg = await axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => res.data.slip.advice);

  const res = bot.telegram.sendMessage(
    -494732805,
    `Good Morning everyone😊\nToday's advice is - \n\n${msg}`
  );
}

function counter(bot) {
  bot.command("count", (ctx) => {
    let input = ctx.message.text.toLowerCase();
    let inputArray = input.split(" ");
    if (inputArray.length === 2 && inputArray[1] == "r") {
      ctx.session.counter = 0;
      ctx.reply("counter reset successfully");
    }
    ctx.session.counter = bot.context.counter || 0;
    ctx.reply(ctx.session.counter);
  });
}

module.exports = {
  scheduler,
  counter,
};

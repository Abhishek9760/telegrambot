const axios = require("axios");

async function scheduler(bot) {
  ctx.session.counter = ctx.session.counter || 0;
  ctx.session.counter++;
  const msg = await axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => res.data.slip.advice);

  bot.telegram.sendMessage(
    -494732805,
    `Good Morning everyone😊\nToday's advice is - \n\n${msg}`
  );
}

function counter(bot) {
  bot.command("count", (ctx) => {
    let count = ctx.session.counter || 0;
    ctx.reply(count);
  });
}

module.exports = {
  scheduler,
  counter,
};

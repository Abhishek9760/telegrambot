const axios = require("axios");

async function scheduler(bot) {
  const msg = await axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => res.data.slip.advice);

  bot.telegram.sendMessage(
    -494732805,
    `Good Morning everyone😊\nToday's advice is - \n\n${msg}`
  );
}

module.exports = {
  scheduler,
};

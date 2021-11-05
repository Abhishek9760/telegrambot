require("dotenv").config();

const Telegraf = require("telegraf");
const session = require("telegraf/session");
const rateLimit = require("telegraf-ratelimit");

// Set limit to 1 message per 2 seconds
const limitConfig = {
  window: 1000,
  limit: 5,
  onLimitExceeded: (ctx) => {
    ctx.reply("Do not spam you brat!");
  },
};

const bot = new Telegraf(process.env.TOKEN);
bot.use(session());
bot.use(rateLimit(limitConfig));

const cron = require("node-cron");

const scheduleCommand = require("./src/commands/scheduler");
cron.schedule("0 7 * * *", () => {
  scheduleCommand.scheduler(bot);
});

scheduleCommand.counter(bot);
const askCommand = require("./src/commands/ask");
askCommand(bot);

const storyCommand = require("./src/commands/story");
storyCommand(bot);

const riddleCommand = require("./src/commands/riddle");
riddleCommand(bot);

const catCommand = require("./src/commands/cat");
catCommand(bot);

const lyricsCommand = require("./src/commands/inlineHandlers/lyrics");
lyricsCommand(bot);

const wikiCommand = require("./src/commands/inlineHandlers/wiki");
wikiCommand(bot);

const dictCommand = require("./src/commands/dict");
dictCommand(bot);

const pixabayCommand = require("./src/commands/inlineHandlers/pixabayimages");
pixabayCommand(bot);

const startCommand = require("./src/commands/start");
startCommand(bot);

const adviceCommand = require("./src/commands/advice");
adviceCommand(bot);

const aboutCommand = require("./src/commands/about");
aboutCommand(bot);

const quoteCommand = require("./src/commands/quote");
quoteCommand(bot);

const dogbreedsCommand = require("./src/commands/dogbreeds");
dogbreedsCommand(bot);

const dogCommand = require("./src/commands/dog");
dogCommand(bot);

const factNumberCommand = require("./src/commands/numberfact");
factNumberCommand(bot);

const diceCommand = require("./src/commands/dice");
diceCommand(bot);

const jokeCommand = require("./src/commands/jokes/joke");
jokeCommand(bot);

const jokeofthedayCommand = require("./src/commands/jokes/jokeoftheday");
jokeofthedayCommand(bot);

const chuckNorrisJokeCommand = require("./src/commands/jokes/chucknorrisjoke");
chuckNorrisJokeCommand(bot);

bot.startPolling();

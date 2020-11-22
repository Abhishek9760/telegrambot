require("dotenv").config();

const Telegraf = require("telegraf");

// const rateLimit = require('telegraf-ratelimit')

// Set limit to 1 message per 2 seconds
// const limitConfig = {
//   window: 1,
//   limit: 15,
//   onLimitExceeded: (ctx, next) => ctx.reply('Rate limit exceeded')
// }

const bot = new Telegraf(process.env.TOKEN);
// bot.use(rateLimit(limitConfig))

const cron = require("node-cron");

const scheduleCommand = require("./src/commands/scheduler");
cron.schedule("00 07 * * *", () => {
  scheduleCommand.scheduler(bot);
});

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

const lunchCommand = require("./src/commands/private/lunch");
lunchCommand(bot);

const dinnerCommand = require("./src/commands/private/dinner");
dinnerCommand(bot);

const bfCommand = require("./src/commands/private/bf");
bfCommand(bot);

const gnCommand = require("./src/commands/private/gn");
gnCommand(bot);

const babyCommand = require("./src/commands/private/baby");
babyCommand(bot);

bot.startPolling();

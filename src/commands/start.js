const config = require("../../config");
const wordapi = require("../scripts/wordapi");

module.exports = (bot) => {
  const sendStartMsg = (ctx) => {
    let msg_obj = ctx.update.message;
    if (msg_obj) {
      let username = ctx.update.message.from.username;
      let name = ctx.update.message.from.first_name;
      let chatid = ctx.update.message.from.id;
      if (username && name && chatid) {
        wordapi.createChatIDDatabase(chatid, name, username).then((data) => {});
      }
    }
    let startMessage =
      "\
Hey! My name is ```Sara```. I am a bot which can do various actions to help you not getting bored.😉\n\
\nBelow are some of my features you can use.\n\nWant to know more try: /about";
    bot.telegram.sendMessage(ctx.chat.id, startMessage, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Dice", callback_data: "send_dice" },
            { text: "Jokes", callback_data: "jokes" },
          ],
          [
            { text: "Mystery", callback_data: "mystery" },
            { text: "Advice", callback_data: "advice" },
          ],
          [
            { text: "Facts", callback_data: "facts" },
            { text: "Dictionary", callback_data: "dict" },
            { text: "Quotes", callback_data: "quote" },
          ],
          [{ text: "Inline Modes", callback_data: "inline" }],
        ],
      },
      parse_mode: "MARKDOWN",
    });
  };

  bot.command(["start", "help"], (ctx) => {
    sendStartMsg(ctx);
  });

  bot.action("start", (ctx) => {
    ctx.deleteMessage();
    sendStartMsg(ctx);
  });

  let actions = [
    "send_dice",
    "jokes",
    "mystery",
    "advice",
    "facts",
    "dict",
    "inline",
    "quote",
  ];
  bot.action(actions, (ctx) => {
    let cmd = ctx.match;
    let msg;
    if (cmd == "send_dice") {
      msg = `
(DICE)
*/dice* - _Sends a dice_
`;
    } else if (cmd == "jokes") {
      msg = `
(JOKES)
*/jokeoftheday* - _Get joke of the day_
*/cnj* - _Get a random Chuck Norris Joke_
*/joke* - _Get any random joke_

(IMAGE RELATED)
*/dogbreeds* - _Get a list of all dog breeds_
*/dog (breed)* - _Get a random image of dog breed_
*/cat* - _Get a random image of cat_
*/cat (name)* - _Get your name caption on cat picture_
`;
    } else if (cmd == "mystery") {
      msg = `
(MYSTERY)
*/riddle* - _Get a random riddle_
*/story* - _Get a story_
`;
    } else if (cmd == "dict") {
      msg = `
(DICTIONARY)
*/dict* - _Get list of all your words._
*/dict make* - _Setup a database._
*/dict add <word>* - _Add a word to your database dictionary._
*/dict get <word>* - _Get more info about specific word present in database._
*/dict valid* - _Get meaningful words._
*/dict invalid* - _Get not meaningful words._
*/dict delete <word>* - _Delete a specific word from database dictionary._
*/dict delete* - _Delete whole database._
`;
    } else if (cmd == "facts") {
      msg = `
(FACTS)
*/f (number)* - _Get a fact on any number_
*/ask (any)* - _Get any answer_
`;
    } else if (cmd == "advice") {
      msg = `
(Advice)
*/advice* - _Get an advice_
`;
    } else if (cmd == "inline") {
      msg = `
*Use Inline Mode*
*@cutioBot s (any)  optional(int results)* - _Search for any song_
*@cutioBot p (any) optional(int results)* - _Search for any Image_
*@cutioBot w (any)* - _Search for anything on wikipedia_
`;
    } else if (cmd == "quote") {
      msg = `
(QUOTE)
*/quote* - _Get awesome quotes_
`;
    }
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, msg, {
      reply_markup: {
        inline_keyboard: [[{ text: "Go Back", callback_data: "start" }]],
      },
      parse_mode: "MARKDOWN",
    });
  });
};

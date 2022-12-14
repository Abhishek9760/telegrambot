const fs = require("fs");
const axios = require("axios");
const wordapi = require("../scripts/wordapi");

module.exports = (bot) => {
  function getSpecificWord(chatId, word) {
    return wordapi
      .getSpecificWordByChatID(chatId, word)
      .then((data) => {
        if (data) {
          if (data.isAxiosError) {
            return data.response.data;
          }
          let msg = `
*${word}*
--------------------------------------------------

*Definition*: ${data.definition || "Not Found"}

*Examples*: ${data.examples || "Not Found"}
`;
          return msg;
        }
      })
      .catch((err) => {
        return err.message;
      });
  }

  function getAllWordsByChatID(ctx, chatId, meaningful = null) {
    return wordapi
      .getWordByChatID(chatId, meaningful)
      .then((data) => {
        if (data && data.isAxiosError) {
          return ctx.reply("Please make a database first by \n*/dict make* ", {
            parse_mode: "MARKDOWN",
          });
        }
        if (data) {
          let msg = ``;
          for (let item of data) {
            msg += item.word + "\n";
          }
          return ctx.reply(msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  bot.command(["dict", "dict@cutio_bot"], (ctx) => {
    let input = ctx.message.text.toLowerCase();
    let inputArray = input.split(" ");
    let chatId = ctx.update.message.from.id;

    if (inputArray.length === 1) {
      getAllWordsByChatID(ctx, chatId);
    }

    if (inputArray.length >= 2) {
      let word = inputArray[2];
      let cmd = inputArray[1];
      if (cmd === "make") {
        let username = ctx.update.message.from.username;
        let name = ctx.update.message.from.first_name;
        let chatid = ctx.update.message.from.id;
        if (username && name && chatid) {
          wordapi.createChatIDDatabase(chatid, name, username).then((data) => {
            return ctx.reply("Database build successfully.");
          });
        }
      } else if (cmd == "add") {
        if (inputArray.length === 3) {
          return wordapi
            .addWordToChatID(chatId, word)
            .then((data) => {
              if (data && data.isAxiosError) {
                return ctx.reply(data.response.data);
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      } else if (cmd === "delete" && inputArray.length === 3) {
        return wordapi
          .deleteWordFromChatID(chatId, word)
          .then((data) => {})
          .catch((err) => {
            ctx.reply(err.message);
          });
      } else if (cmd === "delete" && inputArray.length === 2) {
        return wordapi.deleteChatID(chatId).then((data) => {
          if (!data) {
            return ctx.reply("Database deleted successfully.");
          }
          return ctx.reply("Database already deleted");
        });
      } else if (cmd === "get") {
        return getSpecificWord(chatId, word).then((data) => {
          if (data && !data.isAxiosError) {
            return ctx.reply(data, {
              parse_mode: "MARKDOWN",
            });
          }
        });
      } else if (cmd === "valid") {
        getAllWordsByChatID(ctx, chatId, (meaningful = 1));
      } else if (cmd === "invalid") {
        getAllWordsByChatID(ctx, chatId, (meaningful = 0));
      }
    }
  });
};
// function fileExists (chatId) {
//     return fs.existsSync(`./src/database/dicts/${chatId}.json`);
// }

// function dirExists() {
//     return fs.existsSync("./src/database/dicts");
// }

// function createFile (chatId) {
//     if(!(fileExists(chatId))){
//         fs.writeFileSync(`./src/database/dicts/${chatId}.json`, '{"data": {}}');
//         return true;
//     };
//     return false;
// }

// function writeFile(chatId, data_, word) {
//     createFile(chatId);

//     fs.readFile(`./src/database/dicts/${chatId}.json`, 'utf-8', function(err, data){
//         let d = JSON.parse(data);
//         d.data[word] = JSON.stringify(data_);
//         fs.writeFile(`./src/database/dicts/${chatId}.json`, JSON.stringify(d), 'utf-8', function(err) {
//             if (err) throw err;
//             // console.log('Done!');
//         })
//     });
// }

// function getData (chatId) {
//     if (fileExists(chatId)){
//         let data = fs.readFileSync(`./src/database/dicts/${chatId}.json`, 'utf-8');
//         try{
//             return JSON.parse(data);
//         } catch {
//             return;
//         }
//     };
// }

// function parseData(chatId) {
//     let d = getData(chatId);
//     if(d) {
//         result = Object.keys(d.data).join("\n");
//         return result;
//     }
// }

// function deleteData(chatId, word) {
//     return fs.readFile(`./src/database/dicts/${chatId}.json`, 'utf-8', function(err, data){
//         let d = JSON.parse(data);
//         if (d.data[word]){
//             delete d.data[word];
//             fs.writeFile(`./src/database/dicts/${chatId}.json`, JSON.stringify(d), 'utf-8', function(err) {
//                 if (err) throw err;
//                 console.log('Deleted!');
//             });
//         }
//     });
// }

//     else if (cmd === "get"){
//         let msg = getSpecificWord(chatId, word);
//         return ctx.reply(msg, {
//             parse_mode: "HTML",
//         });
//     }
// }
// })

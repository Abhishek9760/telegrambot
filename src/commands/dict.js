const fs = require("fs"); 
const axios = require('axios');

module.exports = (bot) => {

    function fileExists (chatId) {
        return fs.existsSync(`./src/database/dicts/${chatId}.json`);
    }

    function createFile (chatId) {
        if(!(fileExists(chatId))){
            fs.writeFileSync(`./src/database/dicts/${chatId}.json`, '{"data": {}}');
            return true;
        };
        return false;
    }

    function writeFile(chatId, data_, word) {
        createFile(chatId);

        fs.readFile(`./src/database/dicts/${chatId}.json`, 'utf-8', function(err, data){
            let d = JSON.parse(data);
            d.data[word] = JSON.stringify(data_);
            fs.writeFile(`./src/database/dicts/${chatId}.json`, JSON.stringify(d), 'utf-8', function(err) {
                if (err) throw err;
                // console.log('Done!');
            })
        });
    }

    function getData (chatId) {
        if (fileExists(chatId)){
            let data = fs.readFileSync(`./src/database/dicts/${chatId}.json`, 'utf-8');
            try{
                return JSON.parse(data);
            } catch {
                return;
            }
        };
    }

    function parseData(chatId) {
        let d = getData(chatId);
        if(d) {
            result = Object.keys(d.data).join("\n");
            return result;
        }
    }

    function deleteData(chatId, word) {
        return fs.readFile(`./src/database/dicts/${chatId}.json`, 'utf-8', function(err, data){
            let d = JSON.parse(data);
            if (d.data[word]){
                delete d.data[word];
                fs.writeFile(`./src/database/dicts/${chatId}.json`, JSON.stringify(d), 'utf-8', function(err) {
                    if (err) throw err;
                    console.log('Deleted!');
                });
            }
        });
    }

    function deleteAllData(chatId) {
        return fs.unlinkSync(`./src/database/dicts/${chatId}.json`);
    }

    function getSpecificWord(chatId, word) {
        let data = getData(chatId);
        let d = JSON.parse(data.data[word]);
        if (d){
            let msg = 
`
<b>${word}</b>

Definition: <i>${d["definition"]}</i>
Synonyms: <i>${d["synonyms"]}</i>
Type Of: <i>${d["typeOf"]}</i>
Examples: <i>${d["examples"]}</i>
`       
        // console.log(msg);
        return msg;
        }
    }

    bot.command('dict', ctx => {
        let input = ctx.message.text.toLowerCase();
        let inputArray = input.split(' ');
        let chatId = ctx.update.message.from.id;

        if(inputArray.length === 1) {
            let data = parseData(chatId);
            if (data) {
                return ctx.reply(data)
            } else {
                return ctx.reply(fileExists(chatId) ? "No words currently" : "First make your dictionary using: /dict make")
            };
        }

        if (inputArray.length >= 2){
            let word = inputArray[2];
            let cmd = inputArray[1];
            if(cmd === "make"){
                if (createFile(chatId)){
                    return ctx.reply("Database setup successfully.")
                } return ctx.reply("Database is already setup.\nUse <b>/dict delete</b> to delete database and\n <b>/dict make</b> to make new database.", {
                    parse_mode: "HTML",
                })
            }
            else if(cmd == "add"){
                if(!(fileExists(chatId))) {
                    return ctx.reply("First make your dictionary using: <b>/dict make</b>", {
                        parse_mode: "HTML",
                    });
                }
                if(inputArray.length === 3) {
                    let url = `https://www.wordsapi.com/mashape/words/${word}?when=2020-11-03T11:08:19.853Z&encrypted=8cfdb18ae723929bea9207beee58beb1aeb1240938fa94b8`
                    let dataObj = {};
                    let data = axios.get(url).then(res => {
                        let obj = res.data.results;
                        if (obj){
                            obj = obj[0];
                            dataObj = {
                                definition : obj.definition || "Not found",
                                synonyms : obj.synonyms || "Not found",
                                typeOf : obj.typeOf || "Not found",
                                examples : obj.examples || "Not found"
                            }
                        }
                        return writeFile(chatId, dataObj, word);

                    }).catch(err => {
                        return writeFile(chatId, {}, word);
                    });
                }
            }
            else if(cmd === "delete" && inputArray.length === 3) {
                deleteData(chatId, word);
            }
            else if(cmd === "delete" && inputArray.length === 2) {
                deleteAllData(chatId);
                return ctx.reply("Database deleted successfully.");

            }
            else if (cmd === "get"){
                let msg = getSpecificWord(chatId, word);
                return ctx.reply(msg, {
                    parse_mode: "HTML",
                });
            }
        }
    })
}
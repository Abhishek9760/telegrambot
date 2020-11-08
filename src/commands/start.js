const config = require('../../config');
const wordapi = require("../scripts/wordapi");

module.exports = (bot) => {

    let helpMsg = config.helpMsg;
    
    bot.command(["start", "help"], ctx => {
        let username=ctx.update.message.from.username;
        let name=ctx.update.message.from.first_name;
        let chatid=ctx.update.message.from.id;
        if (username && name && chatid){
            wordapi.createChatIDDatabase(chatid, name, username).then(data => {
            });
        }
        ctx.reply(helpMsg, {
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Search Pixabay Image", switch_inline_query_current_chat: 'p'}
                    ],
                    [
                        {text: "Search Wiki", switch_inline_query_current_chat: 'w'}
                    ],
                    [
                        {text: "Search Songs", switch_inline_query_current_chat: 's'}
                    ],
                ]
            }
        }).catch(err => {
            console.log(err);
        });
    })
    
}
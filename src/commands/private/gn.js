module.exports = (bot) => {
    bot.command("gn", ctx => {
        if (ctx.message.from.id == "917058950" | ctx.message.from.id == "1138438767"){
            ctx.reply("Good night baby😉😙\nSleep tight ok")
        }
    });
}
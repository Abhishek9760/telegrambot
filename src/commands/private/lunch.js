module.exports = (bot) => {
    bot.command("l", ctx => {
        if (ctx.message.from.id == "917058950" | ctx.message.from.id == "1138438767"){
            ctx.reply("Baby lunch kiya👀");
        }
    });
}
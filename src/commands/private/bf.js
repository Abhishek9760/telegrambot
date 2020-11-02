module.exports = (bot) => {
    bot.command("bf", ctx => {
        if (ctx.message.from.id == "917058950" | ctx.message.from.id == "1138438767"){
            ctx.reply("Baby bf kiya👀");
        }
    });
}
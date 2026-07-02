const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply(
`🏠 Orange Real Estate

Добро пожаловать!

Мы бесплатно подберём квартиру в Тбилиси.

Выберите действие:`,
Markup.keyboard([
["🔍 Найти квартиру"],
["❤️ Избранное"],
["ℹ️ Как мы работаем"],
["📞 Связаться с агентом"]
]).resize()
);
});

bot.hears("🔍 Найти квартиру", (ctx)=>{
ctx.reply(
"📍 Выберите район:",
Markup.keyboard([
["Сабуртало","Ваке"],
["Диди Дигоми","Мтацминда"],
["Вера","Дидубе"],
["Ортачала","Исани"],
["Авлабари","Чугурети"],
["Сололаки","Лиси"],
["⬅️ Назад"]
]).resize()
);
});

bot.launch();

const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "🏠 *Orange Real Estate*\n\nДобро пожаловать!\n\nПоможем найти квартиру в Тбилиси без комиссии.",
    {
      parse_mode: "Markdown",
      ...Markup.keyboard([
        ["🔍 Найти квартиру"],
        ["❤️ Избранное"],
        ["ℹ️ Как мы работаем"],
        ["📞 Связаться с агентом"]
      ]).resize()
    }
  );
});

bot.hears("🔍 Найти квартиру", (ctx) => {
  ctx.reply(
    "📍 Выберите район",
    Markup.keyboard([
      ["Сабуртало", "Ваке"],
      ["Вера", "Мтацминда"],
      ["Диди Дигоми", "Дидубе"],
      ["⬅️ Назад"]
    ]).resize()
  );
});

bot.launch();

console.log("🤖 Orange Real Estate Bot запущен");

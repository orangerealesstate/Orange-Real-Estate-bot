const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const apartments = require("./data.json");

const bot = new Telegraf(process.env.BOT_TOKEN);

// START
bot.start((ctx) => {
  ctx.reply(
`🏠 *Orange Real Estate*

Добро пожаловать!

Мы бесплатно подберём квартиру в Тбилиси.

Выберите действие:`,
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

// ПОИСК
bot.hears("🔍 Найти квартиру", (ctx) => {
  ctx.reply(
    "📍 Выберите район:",
    Markup.keyboard([
      ["Сабуртало", "Ваке"],
      ["Диди Дигоми", "Мтацминда"],
      ["Вера", "Дидубе"],
      ["Ортачала", "Исани"],
      ["Авлабари", "Чугурети"],
      ["Сололаки", "Лиси"],
      ["⬅️ Назад"]
    ]).resize()
  );
});

// НАЗАД
bot.hears("⬅️ Назад", (ctx) => {
  ctx.reply(
    "Главное меню",
    Markup.keyboard([
      ["🔍 Найти квартиру"],
      ["❤️ Избранное"],
      ["ℹ️ Как мы работаем"],
      ["📞 Связаться с агентом"]
    ]).resize()
  );
});

// ИЗБРАННОЕ
bot.hears("❤️ Избранное", (ctx) => {
  ctx.reply("⭐ Пока у вас нет избранных квартир.");
});

// КАК МЫ РАБОТАЕМ
bot.hears("ℹ️ Как мы работаем", (ctx) => {
  ctx.reply(`🏠 Orange Real Estate

Мы бесплатно подбираем квартиры.

✔ Анализируем запрос
✔ Подбираем варианты
✔ Организуем просмотры
✔ Проверяем документы
✔ Сопровождаем сделку

Комиссию оплачивает собственник.`);
});

// АГЕНТ
bot.hears("📞 Связаться с агентом", (ctx) => {
  ctx.reply("📲 Telegram: @orangerealestate");
});

const districts = [
  "Сабуртало",
  "Ваке",
  "Диди Дигоми",
  "Мтацминда",
  "Вера",
  "Дидубе",
  "Ортачала",
  "Исани",
  "Авлабари",
  "Чугурети",
  "Сололаки",
  "Лиси"
];

// ПОКАЗ КВАРТИР
bot.hears(districts, (ctx) => {

  const district = ctx.message.text;

  const result = apartments.filter(
    flat => flat.district === district
  );

  if (result.length === 0) {
    return ctx.reply("❌ Пока нет квартир в этом районе.");
  }

  result.forEach(flat => {

    ctx.replyWithPhoto(flat.photo, {
      caption:
`🏠 ${flat.rooms}

💰 ${flat.price}

${flat.text}`
    });

  });

});

// Запуск
bot.launch();

console.log("✅ Orange Real Estate Bot started");

// Корректное завершение
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

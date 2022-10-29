const { Telegraf } = require("telegraf");
const TOKEN = "5469877406:AAHLokic_yBKLn78u6nrUnwtRvYa9wCADKE";
const bot = new Telegraf(TOKEN);

const web_link = "https://635d4c86686fae79d284aaac--clever-starlight-079bec.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Добро пожаловать!", {
    reply_markup: {
      keyboard: [[{ text: "Выбрать обувь", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
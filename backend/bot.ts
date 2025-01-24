import { Telegraf } from 'telegraf';

export const startBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN || '');

  bot.start((ctx) => ctx.reply('Привет! Я бот!'));
  bot.on('text', (ctx) => ctx.reply('Вы написали: ' + ctx.message.text));

  return bot;
};

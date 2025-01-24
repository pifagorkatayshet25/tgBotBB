import { Handler } from '@netlify/functions';
import { startBot } from '../../backend/bot';

const bot = startBot();

const handler: Handler = async (event, context) => {
  bot.launch();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Бот работает!' }),
  };
};

export { handler };

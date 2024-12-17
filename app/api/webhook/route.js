import { sendMessage } from '@/utils/telegram';

const responses = {
  hello: 'Hi there! How can I assist you today?',
  hi: 'Hello! How can I help you?',
  'how are you?': "I'm just a bot, but I'm doing great! How about you?",
  'good morning': 'Good morning! Hope you have a wonderful day!',
  'good night': 'Good night! Sleep well!',
  'thank you': "You're welcome! Feel free to ask if you need anything.",
  bye: 'Goodbye! Take care!',
  ping: 'Pong Yaaaeee',
};

export async function POST(req) {
  try {
    const body = await req.json();

    const chatId = body.message.chat.id;
    const text = body.message.text.toLowerCase().trim();

    // if (text === 'ping') {
    //   await sendMessage(chatId, 'pong Yaaaeee');
    // } else {
    //   await sendMessage(chatId, text);
    // }

    if (responses[text]) {
      await sendMessage(chatId, responses[text]);
    } else {
      await sendMessage(chatId, "Sorry, I didn't understand that.");
    }

    return new Response('ok', { status: 200 });
  } catch (error) {
    console.error('Error parsing body:', error);
    return new Response('Invalid JSON', { status: 400 });
  }
}

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

export async function sendMessage(chatId, text) {
  const url = `${TELEGRAM_API_URL}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chat_id: chatId, text: text }),
    });

    if (response.ok) {
      console.log('Message sent:', text);
    } else {
      console.error('Error sending message:', await response.text());
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

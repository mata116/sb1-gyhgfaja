import axios from 'axios';

const CHATBASE_API_URL = 'https://www.chatbase.co/chatbot-iframe/4G7D_AG2jyQJAQNtagDdR';

export const sendMessage = async (message: string, apiKey: string) => {
  try {
    const response = await axios.post(CHATBASE_API_URL, {
      messages: [{ role: 'user', content: message }],
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error sending message to Chatbase:', error);
    throw error;
  }
};

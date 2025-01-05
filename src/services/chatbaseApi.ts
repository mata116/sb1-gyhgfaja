import axios from 'axios';

const CHATBASE_API_URL = 'https://api.chatbase.co/v1/chat';

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
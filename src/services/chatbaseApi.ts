import axios from 'axios';

const CHATBASE_API_URL = 'https://www.chatbase.co/chatbot-iframe/SY6eyDjroHLVIGi108ojD';

export const sendMessage = async (message: string, apiKey: string) => {
  try {
    const response = await axios.post(CHATBASE_API_URL, {
      messages: [{ role: 'user', content: message }],
    }, {
      headers: {
        'Authorization': `licn5hvruan1make10xe7ists58dchb6`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error sending message to Chatbase:', error);
    throw error;
  }
};

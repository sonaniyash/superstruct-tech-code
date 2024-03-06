import axios from 'axios';

const openAIEndpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

export const generateTitle = async (prompt: string, type:string, key:string) => {
  console.log("debug key",key);
  try {
    const response = await axios.post(
      openAIEndpoint,
      {
        prompt: `Generate a ${type} title: ${prompt}`,
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating title:', error);
    return null;
  }
};

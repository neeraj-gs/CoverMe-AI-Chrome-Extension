import axios from "axios";

// Define constants
const CHATGPT_END_POINT = "https://api.openai.com/v1/chat/completions"; //set up http end point , req to this end point, we cna work with chat completion model they have set up
const CHATGPT_MODEL = "gpt-3.5-turbo";


// Function to send a message to the ChatGPT API and return the response
export const postChatGPTMessage = async (message, openAIKey) => {
    // Set headers for the axios request
    const config = {
      headers: {
        Authorization: `Bearer ${openAIKey}`,
      },
    };
    //req using axios we need to set headers, to get chatgpt end poitn we need a uthorization header
  
    // Create the message object to send to the API
    const userMessage = { role: "user", content: message }; //this is format to send req to the chat completion model
    //system and context are other roles
  
    // Define the data to send in the request body
    const chatGPTData = {
      model: CHATGPT_MODEL,
      messages: [userMessage], //chatgpt is convo model adn all are like an arrahy of msg and replies
    };
  
    try {
      // Send a POST request to the ChatGPT API
      const response = await axios.post(CHATGPT_END_POINT, chatGPTData, config);
  
      // Extract the message content from the API response
      const message = response?.data?.choices[0]?.message.content; //the actual message or cover letter is inside the choices message andntehn  the contnt 
      //actually reetuens the cover letter for us
  
      // Return the message content
      return message;
    } catch (error) {
      console.error("Error with ChatGPT API"); // Log error message
      console.error(error);
  
      // Return null if an error occurs
      return null;
    }
  };
import axios from 'axios';


const API_URL = 'http://localhost:8080/gemini/qna-chat-bot';
export const  fetchChatResponse = async (question) => {
    try {
        const response= await axios.post(API_URL, {question});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
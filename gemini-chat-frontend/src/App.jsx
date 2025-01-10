import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      console.log(apiResponse);
      setResponse(apiResponse);
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }finally{
      setLoading(false);
    }

    console.log(question);
  }

  return (
    <>
        <div className="container">
          <header className='bg-primary text-white p-4  text-center'>
            <h1>Gemini  Chat-Bot</h1>
            </header>
          <ChatInput onSubmit={handleQuestionSubmit}/>
            <ChatResponse response={response}/>
          </div>
    </>
  )
}

export default App

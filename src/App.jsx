import { useState } from 'react'
import { axios } from 'axios'
import './App.css'

function App() {

  // useState react hook. "useState("")" is the intial variable, in this case an empty string. setMessage() is the function I will use to set it to the next state.
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  // const sendMessage = () => {
  //   const res = await axios.post()
  // }

  function sendMessage(e) {
    setMessage(e.target.value);
  }




  return (
    <>
    <div className="input-container">
      <h1>How can I help today?</h1>
      <input type="text" value={message} onChange={sendMessage} className="search-bar" placeholder="Ask Anything"></input>
      <button className="submit-btn" onClick={sendMessage}>Submit</button>
      <h2>Response: {message}</h2>
      </div>
    </>
  )
}

export default App

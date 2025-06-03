import { useRef } from 'react';
const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = useRef();

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value="";

    setChatHistory(history => [...history, {role: "user", text: userMessage}]);
      //bot response for thinking..600 delay
    setTimeout(()=>{
      setChatHistory(history => [...history, {role: "model", text: "Thinking..."}]);

      generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);},600);

  };
  return (
 
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
           <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-rounded">
              keyboard_arrow_up
            </button>
    </form>
     
  )
}

export default ChatForm
import React, { useState } from 'react';

function ChatInput({ handleSetMessage }) {
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = () => {
    if (chatInput.trim() !== '') {
      handleSetMessage(chatInput);
      setChatInput('');
    }
  };

  return (
    <div className="chat_input">
      <button className="sendbtn" onClick={handleSendMessage}>
        Send
      </button>
      <input
        type="text"
        placeholder="message..."
        className="input_msg"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
      />
    </div>
  );
}

export default ChatInput;


import React, { useState, useRef } from 'react';
import './ChatScreen.css';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';
import { Message } from '../../Components/Message/Message';
import ChatBox from '../../Components/ChatBox/ChatBox';
import AddContactModal from '../../Components/ChatScreen/AddContactModal';
import ChatInput from '../../Components/ChatScreen/ChatInput';
import ChatListPanel from '../../Components/ChatScreen/ChatListPanel';
import Header from '../../Components/ChatScreen/Header';

function ChatScreen({ myUserRef }) {
  const navigate = useNavigate();

  const myUser = myUserRef.current || {}; // Provide a default empty object if myUserRef is null

  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [contactChat, setContactChat] = useState(null);
  const [chatList, setChatList] = useState([]);

  const handleContactSwitch = (name) => {
    const chat = chatList.find((chat) => chat.username === name);
    setContactChat(chat);
    setMessages(chat.messages);
  };

  const handleNewContact = () => {
    const contactName = document.getElementById('name').value;
    document.getElementById('name').value = '';
    const user = chatList.find((contact) => contact.username === contactName);

    if (user) {
      handleContactSwitch(contactName);
      return;
    }

    const newContact = {
      username: contactName,
      userImg: '',
      block: 'block active',
      messages: [],
      unreadMessage: 0,
    };

    setChatList([newContact, ...chatList]);
    setMessages(newContact.messages);
    setContactChat(newContact);
  };

  const handleLogOut = () => {
    localStorage.removeItem('userLogin');
    navigate('/login');
  };

  const handleSetMessage = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;

    if (chatInput.trim() !== '') {
      const newMessage = {
        date: timeString,
        content: chatInput,
        id: messages.length + 1,
      };
      contactChat.messages.push(newMessage);
    }
    setChatInput('');
  };

  return (
    <div className="container">
      <button type="button" id="exit-btn" onClick={handleLogOut}>
        Log Out
      </button>
      <div className="ChatScreen">
        <div className="leftSide">
          <Header myUser={myUser} />
          {chatList.length > 0 && (
            <ChatListPanel
              chatList={chatList}
              handleContactSwitch={handleContactSwitch}
            />
          )}
        </div>
        <div className="rightSide">
          {contactChat && <ChatBox contactChat={contactChat} />}
          <div className="chatBox">
            {messages.map((message) => (
              <Message key={message.id} {...message} />
            ))}
          </div>
          <ChatInput chatInput={chatInput}
            setChatInput={setChatInput}
            handleSetMessage={handleSetMessage}
          />
        </div>
      </div>
      <AddContactModal handleNewContact={handleNewContact} />
    </div>
  );
}

export default ChatScreen;
import { useState } from 'react';
import './ChatScreen.css';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';
import { Message } from '../../Components/Message/Message';
import ChatBox from '../../Components/ChatBox/ChatBox';


function ChatScreen({ myUserRef }) {

    const navigate = useNavigate();

    const myUser = myUserRef.current;
    const [chatInput, setChatInput] = useState();
    const [messages, setMessages] = useState([]);
    const [contactChat, setContactChat] = useState();
    const [ChatList, setChatList] = useState([]);

    const handleContactSwitch = (name) => {
        const chat = ChatList.find(chat => chat.username === name);
        setContactChat(chat);
        setMessages(chat.messages);
    }

    const handleNewContact = () => {

        const contactName = document.getElementById('name').value
        document.getElementById('name').value = "";
        const user = ChatList.find(contact => contact.username === contactName);

        if (user) {
            handleContactSwitch(contactName);
            return;
        }
        const newContact = {
            username: contactName,
            userImg: "",
            block: "block active",
            messages: [],
            unreadMessage: 0
        }

        setChatList([newContact, ...ChatList]);
        setMessages(newContact.messages);
        setContactChat(newContact);
    }

    const handleLogOut = () => {
        myUserRef.current = null;
        navigate("/login");
    }

    const handleSetMessage = () => {

        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        if (chatInput.trim() !== "") {

            const newMessage = {
                date: timeString,
                content: chatInput,
                id: messages?.length + 1
            }
            contactChat.messages.push(newMessage);
        }
        setChatInput("");
    }
    return (
        <div className='container'>
            <button type="button" id="exit-btn" onClick={handleLogOut}> Log Out</button>
            <div className="ChatScreen">

                <div className="leftSide">

                    <div className="header">
                        <div className="userimg">
                            <img src={myUser.userImg} alt="user img" className="cover"></img>
                        </div>
                        <div className="username"> {myUser.displayName} </div>
                        <ul className="icons">
                            <li>
                                <button type="button" className="btn btn-primary myfile" data-toggle="modal" data-target="#addModal">
                                    <ion-icon name="person-add-outline"></ion-icon>
                                </button>
                                <div className="modal" id="addModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h4 className="modal-title">Add new contact</h4>
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>

                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name:</label>
                                                        <input type="text" className="form-control" id="name" placeholder="Name or Phone number" />
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button"
                                                    className="btn btn-primary"
                                                    data-dismiss="modal"
                                                    onClick={handleNewContact}>Add</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </li>
                        </ul>
                    </div>

                    {/* CHATLIST */}

                    <div className="chatlist">
                        {ChatList.length === 0 ? <div className='noFriends'>add new people</div> : null}
                        {ChatList?.map((user) => <UserItem func={handleContactSwitch} key={user.username} {...user} />)}
                    </div>


                </div>

                <div className="rightSide">


                    {contactChat ? <ChatBox contactChat={contactChat} /> : null}

                    <div className="chatBox">
                        {messages?.map((message) => (
                            <Message key={message.id} {...message} />
                        ))}
                    </div>

                    <div className="chat_input">
                        <button className="sendbtn"
                            onClick={handleSetMessage}
                        > send </button>
                        <input type="text"
                            placeholder="message..."
                            className=" input_msg"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                        ></input>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ChatScreen;
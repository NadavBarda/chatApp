import { useState } from 'react';
import './ChatScreen.css';
import UserItem from './UserItem';
import { Message } from '../../Components/Message/Message';



function ChatScreen() {

    const [messages, setMessages] = useState([
        { content: "where are youaaaxx ", time: "17:24" },
    ]);

    const [chatInput, setChatInput] = useState("");

    const [userList, setUserList] = useState([
        { block: "active block", username: "Captain", date: "10:32 23.4.23", userImg: "../image/captian.jpg", message: "come to my office please", unreadMessage: 0 },
        { block: "unread block", username: "Jack", date: "23:41 22.4.23", userImg: "bla", message: "wake up", unreadMessage: 2 },
        { block: "active block", username: "Terry", date: "6:00 21.4.23", userImg: "../image/captian.jpg", message: "Im about to hit the Gym", unreadMessage: 0 }
    ]);


    const handleSetMessage = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        if (chatInput.trim() !== "") {

            const newMessage = {

                time: timeString,
                content: chatInput,
                id: messages?.length + 1
            }
            setMessages([...messages, newMessage]);
            
        }
        setChatInput("");
    }

    return (
        <div className='container'>
            <button type="button" id="exit-btn"> Log Out</button>
            <div className="ChatScreen">

                <div className="leftSide">

                    <div className="header">
                        <div className="userimg">
                            <img src="image/minions.webp" alt="user img" className="cover"></img>
                        </div>
                        <div className="username"> bar foo </div>
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
                                                        <input type="text" className="form-control" id="name" placeholder="Name or Phone number"></input>
                                                    </div>
                                                </form>
                                            </div>


                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary">Add</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>

                    <div className="chatlist">
                        {userList?.map((data) => <UserItem key={data.user} {...data} />)}
                    </div>

                </div>

                <div className="rightSide">

                    <div className="header">
                        <div className="imgText">
                            <div className="userimg">
                                <img src="image/terry.jpg" alt="" className="cover"></img>
                            </div>
                            <h4> Terry<br></br><span>online</span></h4>
                        </div>
                        <div className="file">
                            <button type="button" className="btn btn-primary myfile" data-toggle="modal" data-target="">
                                <ion-icon name="folder-outline"></ion-icon>
                            </button>
                        </div>
                    </div>

                    <div className="chatBox">
                        {messages?.map((data) => <Message key={data.id} {...data} />)}

                    </div>

                    <div className="chat_input">
                        <button className="sendbtn"
                            onClick={handleSetMessage}
                        > send </button>
                        <input type="text"
                            placeholder="message..."
                            className=" input_msg "
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
import './ChatScreen.css';
import { UserItem } from './UserItem';

function ChatScreen() {
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

                        <div className="block active">
                            <div className="imgBox">
                                <img src="../image/captian.jpg" alt="" className="cover"></img>
                            </div>
                            <div className="details">
                                <div className="listHead">
                                    <h4>Captain</h4>
                                    <p className="date"> 10:32 23.4.23</p>
                                </div>
                                <div className="message_p">
                                    <p> come to my office please </p>
                                </div>
                            </div>
                        </div>

                        <div className="block unread">
                            <div className="imgBox">
                                <img src="image/jack.jpg" alt="" className="cover"></img>
                            </div>
                            <div className="details">
                                <div className="listHead">
                                    <h4>Jack </h4>
                                    <p className="date"> 9:01 23.4.23</p>
                                </div>
                                <div className="message_p">
                                    <p> I have great plan as you know</p>
                                    <b>2</b>
                                </div>
                            </div>
                        </div>

                        <div className="block active">
                            <div className="imgBox">
                                <img src="image/terry.jpg" alt="" className="cover"></img>
                            </div>
                            <div className="details">
                                <div className="listHead">
                                    <h4>Terry</h4>
                                    <p className="date"> 17:53 20.4.23</p>
                                </div>
                                <div className="message_p">
                                    <p> I'm about to hit the Gym  </p>
                                </div>
                            </div>
                        </div>
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
                        <div className="message my_message">
                            <p>where are you  <br></br>
                                <span>17:24</span></p>
                        </div>
                        <div className="message friend_message">
                            <p>I'm about to hit the Gym  <br></br>
                                <span>17:53</span></p>
                        </div>

                    </div>

                    <div className="chat_input">
                        <button className="sendbtn"> send </button>
                        <input type="text" placeholder="message..." className=" input_msg" ></input>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ChatScreen;
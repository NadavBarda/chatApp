import { Message } from '../Message/Message';

const ChatBox = (props) => {

    const contact = props.contactChat;

    return (
        <>
            <div className="header">
                <div className="imgText">
                    <div className="userimg">
                        <img src={contact.userImg} alt="" className="cover" />
                    </div>
                    <h4>
                        {contact.username}<br />
                        <span>online</span>
                    </h4>
                </div>
                <div className="file">
                    <button
                        type="button"
                        className="btn btn-primary myfile"
                        data-toggle="modal"
                        data-target=""
                    >
                        <ion-icon name="folder-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </>
    );
};
export default ChatBox;  
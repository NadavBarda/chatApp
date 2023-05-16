function UserItem(props) {
  const handleClick = () => {
    props.func(props.username);
  };

  const lastMessage = props.messages?.[props.messages.length - 1];

  return (
    <div className={props.block} key={props.username} onClick={handleClick}>
      <div className="imgBox">
        <img src={props.userImg} alt="" className="cover" />
      </div>
      <div className="details">
        <div className="listHead">
          <h4>{props.username}</h4>
          <p className="date">{lastMessage?.date}</p> {/* Use optional chaining to handle undefined lastMessage */}
        </div>
        <div className="message_p">
          <p>{lastMessage?.content}</p> {/* Use optional chaining to handle undefined lastMessage */}
        </div>
      </div>
    </div>
  );
}

export default UserItem;

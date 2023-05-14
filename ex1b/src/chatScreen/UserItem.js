function UserItem(props) {
  
  return (
    <div className={props.block} key={props.username}>
      <div className="imgBox">
        <img src={props.userImg} alt="" className="cover" />
      </div>
      <div className="details">
        <div className="listHead">
          <h4>{props.username}</h4>
          <p className="date">{props.date}</p>
        </div>
        <div className="message_p">
          <p>{props.message}</p>
          {props.unreadMessage !== 0 && <b>{props.unreadMessage}</b>}
        </div>
      </div>
    </div>
  );
}

export default UserItem;

function UserItem(props) {
    const userList = props.userList.map((user) => {
        return (
            <div className={user.block} key={user.username}>
                <div className="imgBox">
                    <img src={user.userImg} alt="" className="cover" />
                </div>
                <div className="details">
                    <div className="listHead">
                        <h4>{user.username}</h4>
                        <p className="date">{user.date}</p>
                    </div>
                    <div className="message_p">
                        <p>{user.message}</p>
                        {user.unreadMessage !== 0 && <b>{user.unreadMessage}</b>}
                    </div>
                </div>
            </div>
        );
    });

    return <>{userList}</>;
}

export default UserItem;

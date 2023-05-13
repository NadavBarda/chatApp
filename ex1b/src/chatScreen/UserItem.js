function UserItem(props) {

    const userList = props.userList.map((user) => {

        <div className="block active">
            <div className="imgBox">
                <img src={user.userImg} alt="" className="cover"></img>
            </div>
            <div className="details">
                <div className="listHead">
                    <h4>{user.username}</h4>
                    <p className="date"> {user.date}</p>
                </div>
                <div className="message_p">
                    <p> {user.message} </p>
                </div>
            </div>
        </div>

    });
    return (
        <>
            {userList}
        </>
    );
}

export default UserItem;
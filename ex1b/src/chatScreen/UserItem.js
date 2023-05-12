function UserItem({profile}) {
    return (
        <>
            <div className="block active">
                <div className="imgBox">
                    <img src={profile.pic} alt="" className="cover"></img>
                </div>
                <div className="details">
                    <div className="listHead">
                        <h4>{profile.name}</h4>
                        <p className="date"> {profile.date}</p>
                    </div>
                    <div className="message_p">
                        <p> {profile.message} </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserItem;
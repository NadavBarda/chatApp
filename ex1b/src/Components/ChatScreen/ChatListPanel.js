import React from 'react';
import UserItem from '../../Pages/Chat/UserItem';

function ChatListPanel({ ChatList, handleContactSwitch }) {
  return (
    <div className="chatlist">
      {ChatList.length === 0 ? (
        <div className="noFriends">add new people</div>
      ) : null}
      {ChatList?.map((user) => (
        <UserItem
          func={handleContactSwitch}
          key={user.username}
          {...user}
        />
      ))}
    </div>
  );
}

export default ChatListPanel;

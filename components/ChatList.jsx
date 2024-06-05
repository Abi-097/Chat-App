import React from "react";

const ChatList = () => {
  return (
    <div className="chat-list">
      <input
        placeholder="Search chat"
        className="input-search"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default ChatList;

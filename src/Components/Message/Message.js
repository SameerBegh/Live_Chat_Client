import React, { useEffect, useState } from "react";
import "./message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const [time, settime] = useState("");

  useEffect(() => {
    settime((time) => new Date().toLocaleTimeString());
  }, [time]);

  return isSentByCurrentUser ? (
    <div className="message_container send_box">
      <div className="messageBox  color_send">
        <p className="messageText ">{text}</p>
        <p className="messageTime">{time}</p>
      </div>
    </div>
  ) : (
    <div className="message_container recieve_box">
      <div className="messageBox color_recieve">
        <p className="messageText ">{text}</p>
        <p className="messageTime">{time}</p>
      </div>
      <p className="sentText send_name">{user}</p>
    </div>
  );
};

export default Message;

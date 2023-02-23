import "./Chat.css";
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router";
import Input from "../Input/Input";
import Info from "../Info_bar/Info";
import Messages from "../Messages/Messages";
import Participants from "../Participants/Participants";

let socket = io.connect("https://live-chat-server-ayuv.onrender.com");

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const location = useLocation();
  const ENDPOINT = "https://live-chat-server-ayuv.onrender.com";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join_room", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending msgs

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  socket.on(
    "roomData",
    ({ users }) => {
      setUsers(users);
    },
    []
  );

  return (
    <>
      <div className="main_box">
        <Participants users={users} room={room} />
        <div className="box">
          <Info users={users} room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            setMessages={setMessages}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;

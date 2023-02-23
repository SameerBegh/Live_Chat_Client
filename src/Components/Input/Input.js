import React, { useState, useRef } from "react";
import "./input.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmojiPicker from "emoji-picker-react";
import MoodIcon from "@mui/icons-material/Mood";
import { TextareaAutosize } from "@mui/material";

const Input = ({ message, sendMessage, setMessage, setMessages }) => {
  const [showemoji, setshowemoji] = useState(false);
  const inputRef = useRef("");

  const emojiHandler = (e, emoji) => {
    setMessage((prevInput) => prevInput + emoji.emoji);
    inputRef.current.focus();
  };

  function emojiClick() {
    setshowemoji(!showemoji);
    inputRef.current.focus();
  }

  return (
    <>
      <form className="text_msg">
        <MoodIcon
          onClick={emojiClick}
          sx={{ mr: 1, fontSize: 35, color: " #a2a2a2 ", cursor: "pointer" }}
        />

        <div className="emoji_box">
          {showemoji ? (
            <div className="emoji">
              <EmojiPicker
                className="emojiPicker"
                onEmojiClick={emojiHandler}
              />
            </div>
          ) : null}
        </div>

        <TextareaAutosize
          autoFocus={true}
          ref={inputRef}
          maxRows="2"
          className="textarea"
          type="text"
          placeholder="Message...."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />

        <button
          className="send_btn"
          type="submit"
          onClick={(event) => sendMessage(event)}
        >
          <SendRoundedIcon />
        </button>
      </form>
    </>
  );
};

export default Input;

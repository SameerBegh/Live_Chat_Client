import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import "./Join.css";
import logo from "./Neon/logo.jpg";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className="container">
        <div className="form_box ">
          <div className="main-form">
            <div className="header" id="btn">
              <img className="logo" src={logo} alt="" />
            </div>

            <div className="live_typing">
              <Typewriter
                options={{
                  strings: ["Welcome to Live Chat"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="media_typing">
              <h3>WELCOME</h3>
              <Typewriter
                options={{
                  strings: ["Join.. Live Chat"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <form>
              <div className="input_box">
                <input
                  className="icon"
                  type="text"
                  placeholder="&#xf007;  Enter Name"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="input_box">
                <input
                  className="icon"
                  type="text"
                  placeholder="&#xf023;  Enter Room Id"
                  onChange={(event) => setRoom(event.target.value)}
                  required
                />
              </div>
              <div className="glow-btn ">
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={(event) =>
                    !name || !room ? event.preventDefault() : null
                  }
                  to={`/chat?name=${name}&room=${room}`}
                >
                  <button className="join_btn" type="submit">
                    Join Room
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;

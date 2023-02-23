import React from "react";
import "./Participants.css";
import icon from "./usericon/usericon.jpg";
import GroupIcon from "@mui/icons-material/Groups";

const Participants = ({ users, room }) => {
  return (
    <div className="active_box">
      {users?.length > 1 ? (
        <div className="active_list">
          <div className="active_info">
            <h3>Room Id : {room} </h3>
            <h4>
              <GroupIcon
                style={{ fontSize: 30, marginBottom: -8, marginRight: 5 }}
              />
              Room Members
            </h4>
          </div>

          {users.map(({ name }) => (
            <div className="active_user" key={name}>
              <span>
                <img src={icon} alt="" className="user_icon" />
              </span>
              {name}
            </div>
          ))}
        </div>
      ) : (
        <div className="invite_box">
          <div className="active_info">
            <h3>Room Id : {room} </h3>
          </div>
          <div className="invite">
            <h4>Invite your Friends to join a Room</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Participants;

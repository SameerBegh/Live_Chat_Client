import React, { useState } from "react";
import "./info.css";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import GroupIcon from "@mui/icons-material/Groups";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import icon from "./usericon/usericon.jpg";
import Box from "@mui/material/Box";

const Info = ({ users, room }) => {
  const [openExit, setopenExit] = useState(false);
  const [Open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
            overflow: "hidden",
          }}
        >
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit">
              <MarkUnreadChatAltIcon style={{ fontSize: 30 }} />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Live Chat
            </Typography>

            <IconButton
              size="large"
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <div className="group_icon">
                <GroupIcon style={{ fontSize: 35 }} />
              </div>
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              onClick={() => setopenExit(true)}
              sx={{ mr: -2 }}
            >
              <ExitToAppIcon style={{ fontSize: 30 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Dialog open={openExit} onClose={() => setopenExit(false)}>
        <DialogTitle style={{ fontSize: 60 }}>Exit Chat Room..!</DialogTitle>
        <DialogContent>Are you sure You want to exit?</DialogContent>
        <DialogActions>
          <Button onClick={() => setopenExit(false)}>No</Button>
          <Button>
            <a href="/" className="yes_btn">
              Yes
            </a>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog fullScreen open={Open}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Room Id : {room}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <GroupIcon sx={{ color: "blue", fontSize: 30, mb: 0.9 }} />
            <ListItemText sx={{ ml: 1 }}> Group Members</ListItemText>
          </ListItem>

          {users?.length > 1 ? (
            users.map(({ name }) => (
              <ListItem key={name}>
                <span>
                  <img src={icon} alt="img" className="user_icon" />
                </span>
                {name}
              </ListItem>
            ))
          ) : (
            <div className="invite">
              <h4>Invite your Friends to join a Room</h4>
            </div>
          )}
        </List>
      </Dialog>
    </>
  );
};

export default Info;

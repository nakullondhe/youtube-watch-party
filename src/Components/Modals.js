import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const GetNameModal = ({ open, onClose, roomId }) => {
  const [state, setState] = useState("");
  
  const onSubmit = () => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user && user.owner) {
      user.name = state;
    } else {
      user.name = state;
      user.owner = false;
    }
    window.localStorage.setItem("user", JSON.stringify(user));
    onClose();
  };
  
  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if(user && !user.owner) {
      if(user.roomId !== roomId) {
        user.roomId = roomId;
        delete user.name;
        window.localStorage.setItem("user", JSON.stringify(user));
      } else if (user && user.name) {
        onClose();
      }

    }
    if(user.name) {
      onClose();
    }
  
  });
  
  return (
    <Dialog maxWidth="md" open={open} >
      <DialogTitle>Enter your name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          placeholder="Enter name"
          type="text"
          fullWidth
          variant="outlined"
          size="small"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

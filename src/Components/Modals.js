import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocal } from "../Providers/Service";

export const GetNameModal = ({ open, onClose, roomId }) => {
  const [state, setState] = useState("");

  const onSubmit = () => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user) {
      user.name = state;
      window.localStorage.setItem("user", JSON.stringify(user));
    } else {
      user = {
        roomId,
        name: state,
        owner: false,
      };
      window.localStorage.setItem("user", JSON.stringify(user));
    }
    onClose();
  };

  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user && user.name) {
      onClose();
    }
  });
  
  return (
    <Dialog maxWidth="md" open={open} sx={{}}>
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

import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "./Assets/logo.png";
import { createRoom } from "./Providers/Service";
import Constants from './Constants';

const Entry = () => {
  const [text, setText] = useState("");

  const onCreateRoom = async () => {
    const room = await createRoom();
    if (room.success) {
      const user = {
        roomId: room.id,
        owner: true,
      };
      window.localStorage.setItem("user", JSON.stringify(user));
      window.location.href = `${Constants.hostProd}/${room.id}`;
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backgroundColor: "#202020",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
          borderRadius: "10px",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{ height: "80px", marginBottom: "30px" }}
        />
        <Button fullWidth variant="contained" onClick={onCreateRoom}>
          Create Room
        </Button>
        <Typography
          variant="h5"
          component="h5"
          sx={{ margin: "20px 0", color: "white" }}
        >
          OR
        </Typography>
        <TextField
          inputProps={{
            style: {
              color: "white",
              borderColor: "white",
              textAlign: "center",
            },
          }}
          fullWidth
          size="small"
          sx={{
            marginBottom: 2,
            borderColor: "gray",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
            },
          }}
          variant="outlined"
          placeholder="Enter Room Id"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button fullWidth variant="contained">
          Join Room
        </Button>
      </Paper>
    </Box>
  );
};

export default Entry;

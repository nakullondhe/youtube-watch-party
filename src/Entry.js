import React, { useEffect, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { Box } from "@mui/system";
import logo from "./Assets/logo.png";
import { db } from "./firebase";
import { createRoom, generateName } from "./Providers/Service";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Entry = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState({
    action: false,
    id: '',
  })

  const onCreateRoom = async () => {
    const room = await createRoom(name);
    window.localStorage.setItem('user', name)
    if(room.success) {
      window.location.href = `http://localhost:3000/${room.id}`
    }
  }


  useEffect(() => {
    generateName().then(res => {
      setName(res ? res[0] : '')
    })
  }, []);
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
          onChange={(e) => setText(e.target.value)}
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
        />
        <Button fullWidth variant="contained">
          Join Room
        </Button>
      </Paper>
      {/* {redirect && <Redirect to={`/${redirect.id}`} />} */}
    </Box>
  );
};

export default Entry;

import React, { createContext, useContext, useState } from "react";

const RoomContext = createContext(null);

const RoomProvider = ({ children }) => {
  const [scriptLoad, setScriptLoad] = useState(false);
  const [input, setInput] = useState("");
  const [player, setPlayer] = useState(null);
  const [room, setRoom] = useState({
    room: null,
    user: "",
  });
  const [chats, setChats] = useState([]);

  const props = {
    input,
    setInput,
    room,
    setRoom,
    chats,
    setChats,
    player,
    setPlayer,
  };
  return <RoomContext.Provider value={props}>{children}</RoomContext.Provider>;
};

export default RoomProvider;

export const useRoom = () => useContext(RoomContext);

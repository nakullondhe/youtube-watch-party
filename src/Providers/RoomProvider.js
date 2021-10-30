import React, { createContext, useContext, useState } from "react";

const RoomContext = createContext(null);

const RoomProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [player, setPlayer] = useState(null);
  const [gap, setGap] = useState(null);
  const [room, setRoom] = useState(null);
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
    gap,
    setGap,
  };
  return <RoomContext.Provider value={props}>{children}</RoomContext.Provider>;
};

export default RoomProvider;

export const useRoom = () => useContext(RoomContext);

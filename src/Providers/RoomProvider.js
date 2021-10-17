import React, { createContext, useContext, useState } from "react";

const RoomContext = createContext(null);

const RoomProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [room, setRoom] = useState({
    room: Object,
    user: '',
  });
  const [chats, setChats] = useState([]);

  const props = {
    input,
    setInput,
    room,
    setRoom,
    chats,
    setChats,
  };
  return <RoomContext.Provider value={props}>{children}</RoomContext.Provider>;
};

export default RoomProvider;

export const useRoom = () => useContext(RoomContext);

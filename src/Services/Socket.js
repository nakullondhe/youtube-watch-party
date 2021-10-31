import io from 'socket.io-client';
// const SOCKET_URL = "https://macabre-cheateau-43015.herokuapp.com/";
const SOCKET_URL = "http://localhost:3000/";
const socket = io(SOCKET_URL);

export default socket;
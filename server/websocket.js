/* eslint-disable no-undef */

const io = require('socket.io')(global.server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  socket.on('join', ({roomId, name})  => {
    console.log({roomId, name})
    socket.join(roomId);
    socket.roomId = roomId;
  })
  socket.on('time-counter', data => {
    console.log(data)
    socket.emit('timer-up', data)
  })
  
})
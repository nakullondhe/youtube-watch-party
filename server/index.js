const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express();
const server = http.createServer(app)

app.use(cors());

app.get('/', (req,res) => {
  res.send("message: 'boom bam'")  
})

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connect', socket => {
  console.log('conn')
  socket.on('disconnect', function(){
    console.log('beem')
    });
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

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
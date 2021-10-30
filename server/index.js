const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express();
const server = http.createServer(app)


global.server = server;

app.use(cors({
  origin: '*'
}));

app.get('/', (req,res) => {
  res.send("message: 'boom bam'")  
})

const io = require('./websocket')


const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
// index.js
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)


const path = require('path')

app.use(express.static(path.join(__dirname, '/static')))

io.on('connection', (socket) => {
    
    
    socket.on('chat', (message) => {
        console.log(`some client with id ${socket.id} messaging`)
        
        
            io.emit('chat', message, socket.id)
        
    })
    
})

const port = process.env.PORT || 3000


server.listen(port, () => {
    console.log('listening on: ', port)
})

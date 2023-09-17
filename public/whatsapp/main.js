const socket = io('/whatsapp')

socket.on('connection', socket => {
    console.log(`client connection: ${socket.id}`)
})
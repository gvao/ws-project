const socket = io()

socket.on("connection", socket => {

    console.log("new client!")
    console.log(`id: `, socket.id)

})

socket.emit('send message', 'client >>> testing socket')

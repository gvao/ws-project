import { io } from '../http'

const ioWhatsapp = io.of('/whatsapp')

ioWhatsapp.on('connection', socket => {
    console.log(`[server]: whatsapp client connected: ${socket.id}`)
})

io.on('connection', socket => {

    console.log(`server: client connected: ${socket.id}`)

    socket.on('disconnect', () => console.log(`client disconnected, id: ${socket.id}`))

})

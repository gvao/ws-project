import { server } from './http'
import './socket'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`listening on port: http://localhost:${PORT}`)
})
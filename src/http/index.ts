import express from 'express'
import path from 'path'
import http from 'node:http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const publicPath = path.join(__dirname, '..', '..', 'public')

app.use(express.static(publicPath))

export { server, io }
import mongoose from "mongoose";
import { createServer } from "node:http";
import { Server } from "socket.io";
import createApp from "./appBuild.js";
import  ChatClass  from "./controllers/chatController.js";
import "dotenv/config";

const app = createApp();
const server = createServer(app);
export const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Socket is listening');

  socket.on('send message', (message, room, senderId) => {
    ChatClass.sendChat(message, room, senderId)
  });

  socket.on('join room', (room) => {
    ChatClass.joinRoom(room);
  })
});

mongoose
    .connect(`mongodb://${process.env.HOST}/${process.env.DBNAME}`)
    .then(console.log(`connected to database`))
    .catch(err => console.log(err))


server.listen(`${process.env.PORT}`, () => {
  console.log(`server is running on http://${process.env.HOST}:${process.env.PORT}`)
})

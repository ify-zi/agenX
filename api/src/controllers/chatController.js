import { io } from "../server.js";
import  Chat  from "../models/chatModel.js";


export default class ChatClass {
  static async sendChat (message, room, senderId) {
    try{
      if (message && room ){
        const msg = new Chat({
          'message': message,
          'roomId': room,
          'senderId': senderId
        });
        await msg.save();
        io.to(room).emit(message, senderId)
        return true;
      }
    } catch(err){
      console.log(`Error: ${err}`)
      return false;
    }
  }

  static async joinRoom(room) {
    io.join(room)
  }

  static async getChat(req, res) {
    const roomId = req.body.roomId
    const chats = await Chat.find({roomId: chatId})
    return res.status(200).json(chats)
  }

  static async editChat(req, res) {
    const chatId = req.body.chatId;
  }
}
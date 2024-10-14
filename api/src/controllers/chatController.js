import { io } from "../server.js";
import { Chat } from "../models/chatModel.js";


export class ChatClass {
  static async sendChat (message, room, senderId) {
    try{
      if (message && room ){
        const msg = new Chat({
          'message': message,
          'roomId': room,
          'senderId': senderId
        });
        await msg.save();
        io.to(room).emit(message)
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
    const chatId = req.body.conversationId
    const chats = await Chat.find({conversationid: chatId})
    return res.status(200).json(chats)
  }
}
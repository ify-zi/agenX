import { Router } from "express";
import Chat from "../controllers/chatController.js"

const chat = Router();

//Get all chats
chat.get('/chats',)

//Get chats with specific id
chat.get('/chats/:id', Chat.getChats )

//update a chat with id
chat.put('/chats/:id', Chat.editChat)

//delete a chat
//chat.delete('/chats/:id')

export default chat;
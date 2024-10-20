import { Router } from "express";
import ChatClass from "../controllers/chatController.js"
import verifyUser from "../utils/verifyUser.js";

const chat = Router();

//Get all chats
//chat.get('/chats',verifyUser, Chate)

//Get chats with specific id
chat.get('/chats/:id', verifyUser, ChatClass.getChat)

//update a chat with id
chat.put('/chats/:id',verifyUser, ChatClass.editChat)

//delete a chat
//chat.delete('/chats/:id')

export default chat;
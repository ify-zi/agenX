import {Router} from "express";
import auth from "./auth.js";
import chat from "./chat.js";
import user from "./user.js";

const routes = Router()

routes.use(auth);
routes.use(chat);
routes.use(user);

export default routes;
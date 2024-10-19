import { Router } from "express";
import Auth from "../controllers/authController.js";
import passport from "../utils/authStrategy.js";

const auth = Router();

auth.post('/auth/signup', Auth.createUser)

auth.post('/auth/login', Auth.localLogin)

auth.get('/auth/google', passport.authenticate('google', {scope: ['email', 'profile']} ))

auth.post('/auth/logout', )

export default auth;
import { Router } from "express";
import Auth from "../controllers/authController.js";


const auth = Router();

auth.post('/auth/signup', Auth.createUser)

auth.post('/auth/login', passport.authenticate('local'))

auth.get('/auth/google', passport.authenticate('google', {scope : [email, profile]}))

auth.post('/auth/logout', )
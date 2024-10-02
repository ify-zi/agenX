import express from "express";
import session from "express-session";
import passport from "./utils/authStrategy.js";


export default  function createApp() {
  const app = express();

  app.use(express.json())
  // session declaration or whatever
  app.use(session({
    secret: `${process.env.SESSIONSECRET}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 6000 * 60
    }
  }))

  app.use(passport.initialize())
  app.use(passport.session())
  app.use(express.urlencoded({
                  extended: true
                }
              ))
  //app.use(router)

  return app;
}
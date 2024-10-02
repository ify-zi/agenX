import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/userModel.js";
import { checkPwd } from "./hasher.js";


//serialize User into session
passport.serializeUser((user, done)=>{
  done(null, user.id)
})

//deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try{
    const user = await User.findBYId(id);
    if (!user) throw new Error("User not Found");
    done(null, user)
  }
  catch (err) {
    done(err, null)
  }
})

//Handles authencation using local strategy
passport.use(
  new Strategy({usernameField: "email"}, async (email, password, done)=> {
    try {
      const user = await User.findOne({email});
      if (!user) return done(null, false, {message: "User not found"});
      if (!checkPwd(password, user.password)) return done(null, false, {mesage: "Incorrect Passowrd"})
      done(null, user);
    } catch(err) {
  done(err, null)
}
  }
)
);

// handel google oauth
passport.use(
  new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: '/auth/redirect/google',
    scope: [ 'profile' ]
  }, async (accessToken, refreshToken, profile, done)=>{
    try {
      const user = await User.findOne({googleId: profile.id});
      if (user) return done(null, user);

      const newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].values,
        googleId: profile.id
      })
      const savedUser = await newUser.save();
      done(null, savedUser);
    } catch (err) {
      done(err, null)
    }

  })
)

export default passport;
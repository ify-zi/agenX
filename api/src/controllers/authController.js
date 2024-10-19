import User from "../models/userModel.js";
import logUser from "../utils/logUser.js";
import passport from "../utils/authStrategy.js";

// Class is responsible for authentication

export default class Auth {
  // class method creates a user and returns the user object
  static async createUser(req, res) {
    const { body } = req;
    const name = (body.name) ? body.name : "null";
    const email = (body.email) ? body.email : "null";
    const location = (body.location) ? body.location : "null";
    const password = (body.password) ? body.password : "null";
    const isOwner = (body.isOwner) ? body.isOwner : false;

    const data = {
      name,
      email,
      location,
      password,
      isOwner
    };

    const newUser = new User(data);
    try {
      await newUser.save();
      return res.status(201).json({
        id: newUser._id,
        email: newUser.email,
        location: newUser.location,
        isOwner: newUser.isOwner
      })
    } catch (err) {
      return res.status(422).json("Please fill all the necessary fields")
    }
  }

  // method handles user login criteria
  static localLogin(req, res) {
    passport.authenticate('local', logUser(err, user, info, req, res))
  }

  //method handles logout
  static async logout(req, res) {
    const { user } = req.user;
    if (!user) return res.status(401)
    req.logout((err) => {
      if (err) return res.status(500).send(err)
      }
    )
    return res.status(200)
  }
}
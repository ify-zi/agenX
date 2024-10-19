//verify User is logged in and still in Session
export default function verifyUser(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  }
  return res.status(401).json({error: "Unauthorised"});
}
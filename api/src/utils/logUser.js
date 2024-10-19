
// handle user login through passport local method
export default function logUser(err, user, info, req, res) {
  if (err) return res.status(500).json(`Error: ${err.message}`);
  if (!user) return res.status(400).json(`Error: ${info.message}`);
  req.logIn(user, (err) => {
    if (err) return res.status(500).json('Login failed')
    const loggedUser = {
    id: user._id,
    name: user.name,
    location: user.location,
    isOwner: user.isOwner
  }
  return res.status(200).json({message: "login successfull", loggedUser})
});
}
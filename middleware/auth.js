const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  // AUTH: 'Bearer token'
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "secret_key");
  req.userData = { email: decodedToken.email };

  next()
};

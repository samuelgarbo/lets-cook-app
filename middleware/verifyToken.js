const jwt = require("jsonwebtoken");
const config = require("../config/default");

function verifyToken(req, res, next) {
  const authHeader = req.header("authorization");

  if (typeof authHeader === "undefined") {
    return res.sendStatus(401);
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, config.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
}

module.exports = verifyToken;
